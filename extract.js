'use strict'

const BB = require('bluebird')

const cacache = require('cacache')
const extractStream = require('./lib/extract-stream')
const npa = require('npm-package-arg')
const pipe = BB.promisify(require('mississippi').pipe)
const optCheck = require('./lib/util/opt-check')
const retry = require('promise-retry')
const rimraf = BB.promisify(require('rimraf'))
const readdirAsync = BB.promisify(require('fs').readdir)

module.exports = extract
function extract (spec, dest, opts) {
  opts = optCheck(opts)
  spec = typeof spec === 'string' ? npa(spec, opts.where) : spec
  const startTime = Date.now()
  return checkOverwrite(opts.extractOverwrite, spec, dest)
    .then(() => {
      if (opts.integrity && opts.cache && !opts.preferOnline) {
        opts.log.silly('pacote', 'trying', spec.name, 'by hash:', opts.integrity.toString())
        return extractByDigest(
          startTime, spec, dest, opts
        ).catch(err => {
          if (err.code === 'ENOENT') {
            opts.log.silly('pacote', `data for ${opts.integrity} not present. Using manifest.`)
            return extractByManifest(startTime, spec, dest, opts)
          }

          if (err.code === 'EINTEGRITY' || err.code === 'Z_DATA_ERROR') {
            opts.log.warn('pacote', `cached data for ${spec} (${opts.integrity}) seems to be corrupted. Refreshing cache.`)
          }
          return cleanUpCached(
            dest, opts.cache, opts.integrity, opts
          ).then(() => {
            return extractByManifest(startTime, spec, dest, opts)
          })
        })
      } else {
        opts.log.silly('pacote', 'no tarball hash provided for', spec.name, '- extracting by manifest')
        return retry((tryAgain, attemptNum) => {
          return extractByManifest(
            startTime, spec, dest, opts
          ).catch(err => {
            // Retry once if we have a cache, to clear up any weird conditions.
            // Don't retry network errors, though -- make-fetch-happen has already
            // taken care of making sure we're all set on that front.
            if (opts.cache && !err.code.match(/^E\d{3}$/)) {
              if (err.code === 'EINTEGRITY' || err.code === 'Z_DATA_ERROR') {
                opts.log.warn('pacote', `tarball data for ${spec} (${opts.integrity}) seems to be corrupted. Trying one more time.`)
              }
              return cleanUpCached(
                dest, opts.cache, err.sri, opts
              ).then(() => tryAgain(err))
            } else {
              throw err
            }
          })
        }, { retries: 1 })
      }
    })
}

function extractByDigest (start, spec, dest, opts) {
  const xtractor = extractStream(dest, opts)
  const cached = cacache.get.stream.byDigest(opts.cache, opts.integrity, opts)
  return pipe(cached, xtractor).then(() => {
    opts.log.verbose('pacote', `${spec.name}@${spec.saveSpec || spec.fetchSpec} extracted to ${dest} by content address ${Date.now() - start}ms`)
  })
}

let fetch
function extractByManifest (start, spec, dest, opts) {
  const xtractor = extractStream(dest, opts)
  return BB.resolve(null).then(() => {
    if (!fetch) {
      fetch = require('./lib/fetch')
    }
    return pipe(fetch.tarball(spec, opts), xtractor)
  }).then(() => {
    opts.log.verbose('pacote', `${spec.name}@${spec.saveSpec || spec.fetchSpec} extracted in ${Date.now() - start}ms`)
  })
}

function cleanUpCached (dest, cachePath, integrity, opts) {
  return BB.join(
    rimraf(dest),
    cacache.rm.content(cachePath, integrity, opts)
  )
}

function checkOverwrite (extractOverwrite, spec, dest) {
  if (extractOverwrite) {
    return BB.resolve()
  } else {
    return readdirAsync(dest)
      .then((dir) => {
        const err = new Error(`Attempted to extract ${spec} to non-empty directory ${dest}. Use the extractOverwrite option to override.`)
        err.target = dest
        err.code = 'EBADDIR'
        throw err
      })
      .catch({ code: 'ENOENT' }, () => {})
  }
}
