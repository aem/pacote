# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="2.7.0"></a>
# [2.7.0](https://github.com/zkat/pacote/compare/v2.6.0...v2.7.0) (2017-04-29)


### Bug Fixes

* **registry:** stop using integrity hashes for metadata. again. ([4595ab2](https://github.com/zkat/pacote/commit/4595ab2))


### Features

* **manifest:** include _shasum for legacy compat ([b3a7eed](https://github.com/zkat/pacote/commit/b3a7eed))



<a name="2.6.0"></a>
# [2.6.0](https://github.com/zkat/pacote/compare/v2.5.0...v2.6.0) (2017-04-29)


### Features

* **manifest:** annotate manifests with _from ([e45e968](https://github.com/zkat/pacote/commit/e45e968))



<a name="2.5.0"></a>
# [2.5.0](https://github.com/zkat/pacote/compare/v2.4.0...v2.5.0) (2017-04-28)


### Bug Fixes

* **registry:** JSON text is not a valid header value ([78951ea](https://github.com/zkat/pacote/commit/78951ea))


### Features

* **memoization:** allow injection and control of memoizers ([d8a2be7](https://github.com/zkat/pacote/commit/d8a2be7))



<a name="2.4.0"></a>
# [2.4.0](https://github.com/zkat/pacote/compare/v2.3.2...v2.4.0) (2017-04-27)


### Bug Fixes

* **tests:** nicer error message on registry 404 ([e8e71c8](https://github.com/zkat/pacote/commit/e8e71c8))


### Features

* **auth:** added basic auth and always-auth support ([548aeb5](https://github.com/zkat/pacote/commit/548aeb5))
* **proxy:** proxy support for registry and remote deps ([3766bbb](https://github.com/zkat/pacote/commit/3766bbb))



<a name="2.3.2"></a>
## [2.3.2](https://github.com/zkat/pacote/compare/v2.3.1...v2.3.2) (2017-04-26)


### Bug Fixes

* **deps:** reduce deps size with m-f-h upgrade ([ba75461](https://github.com/zkat/pacote/commit/ba75461))



<a name="2.3.1"></a>
## [2.3.1](https://github.com/zkat/pacote/compare/v2.3.0...v2.3.1) (2017-04-26)


### Bug Fixes

* **git:** another attempt at fixing EPERM b.s. ([e445bef](https://github.com/zkat/pacote/commit/e445bef))



<a name="2.3.0"></a>
# [2.3.0](https://github.com/zkat/pacote/compare/v2.2.2...v2.3.0) (2017-04-26)


### Bug Fixes

* **git:** had ENOTSUP error on windows ([ee17c35](https://github.com/zkat/pacote/commit/ee17c35))
* **memoization:** actually memoize package metadata ([e2078c0](https://github.com/zkat/pacote/commit/e2078c0))


### Features

* **memoization:** better packument memoization + pacote.clearMemoized() ([eb1bd4f](https://github.com/zkat/pacote/commit/eb1bd4f))



<a name="2.2.2"></a>
## [2.2.2](https://github.com/zkat/pacote/compare/v2.2.1...v2.2.2) (2017-04-24)


### Bug Fixes

* **prefetch:** pull in new cacache + fix prefetch hasContent call ([9f476b8](https://github.com/zkat/pacote/commit/9f476b8))



<a name="2.2.1"></a>
## [2.2.1](https://github.com/zkat/pacote/compare/v2.2.0...v2.2.1) (2017-04-23)


### Bug Fixes

* **finalize:** pass on engines/cpu/os ([0a73c78](https://github.com/zkat/pacote/commit/0a73c78))



<a name="2.2.0"></a>
# [2.2.0](https://github.com/zkat/pacote/compare/v2.1.2...v2.2.0) (2017-04-22)


### Bug Fixes

* **git:** fix shortcut fallback order again ([5759d40](https://github.com/zkat/pacote/commit/5759d40))
* **registry:** fix infinite manifetch loop ([6c6a62b](https://github.com/zkat/pacote/commit/6c6a62b))


### Features

* **manifest:** opts.fullMetadata to get unfiltered manifests ([ff2945b](https://github.com/zkat/pacote/commit/ff2945b))



<a name="2.1.2"></a>
## [2.1.2](https://github.com/zkat/pacote/compare/v2.1.1...v2.1.2) (2017-04-20)



<a name="2.1.1"></a>
## [2.1.1](https://github.com/zkat/pacote/compare/v2.1.0...v2.1.1) (2017-04-19)


### Bug Fixes

* **git:** use sshurl instead of ssh for ssh clones ([ff20803](https://github.com/zkat/pacote/commit/ff20803))
* **notice:** only log npm-notice if the packument came from network ([eeeb411](https://github.com/zkat/pacote/commit/eeeb411))
* **registry:** improve 404 error messages ([6a5cbdb](https://github.com/zkat/pacote/commit/6a5cbdb))



<a name="2.1.0"></a>
# [2.1.0](https://github.com/zkat/pacote/compare/v2.0.5...v2.1.0) (2017-04-18)


### Bug Fixes

* **cache:** bump deps for cache fixes ([9596434](https://github.com/zkat/pacote/commit/9596434))


### Features

* **warn:** http warning headers now logged ([f22ce1d](https://github.com/zkat/pacote/commit/f22ce1d))



<a name="2.0.5"></a>
## [2.0.5](https://github.com/zkat/pacote/compare/v2.0.4...v2.0.5) (2017-04-18)


### Bug Fixes

* **file:** oops, the type for these is file ([e7a3d35](https://github.com/zkat/pacote/commit/e7a3d35))



<a name="2.0.4"></a>
## [2.0.4](https://github.com/zkat/pacote/compare/v2.0.3...v2.0.4) (2017-04-18)


### Bug Fixes

* **deps:** remove normalize-git-url ([12d464a](https://github.com/zkat/pacote/commit/12d464a))
* **git:** Correctly read in the HEAD ref after cloning ([dbe1b15](https://github.com/zkat/pacote/commit/dbe1b15))
* **git:** The full clone path doesn't have _resolved set ([ddce561](https://github.com/zkat/pacote/commit/ddce561))
* **manifest:** no _from ever ([15087c4](https://github.com/zkat/pacote/commit/15087c4))



<a name="2.0.3"></a>
## [2.0.3](https://github.com/zkat/pacote/compare/v2.0.2...v2.0.3) (2017-04-15)


### Bug Fixes

* **manifest:** meh just shove _from in there ([4396f09](https://github.com/zkat/pacote/commit/4396f09))
* **registry:** include CI header ([86ad911](https://github.com/zkat/pacote/commit/86ad911))
* **registry:** include npm-scope header ([574cd93](https://github.com/zkat/pacote/commit/574cd93))
* **registry:** make sure to send referer header ([2d3aaac](https://github.com/zkat/pacote/commit/2d3aaac))



<a name="2.0.2"></a>
## [2.0.2](https://github.com/zkat/pacote/compare/v2.0.1...v2.0.2) (2017-04-15)


### Bug Fixes

* **directory:** fix default pack-dir and write a test for it ([9d9266f](https://github.com/zkat/pacote/commit/9d9266f))
* **extract:** brainfart with extractByManifest fixed. lol. ([a1367fb](https://github.com/zkat/pacote/commit/a1367fb))



<a name="2.0.1"></a>
## [2.0.1](https://github.com/zkat/pacote/compare/v2.0.0...v2.0.1) (2017-04-15)


### Bug Fixes

* **tarball:** missed the local->tarball rename ([ac42dc4](https://github.com/zkat/pacote/commit/ac42dc4))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/zkat/pacote/compare/v1.0.0...v2.0.0) (2017-04-15)


### Bug Fixes

* **api:** use npa[@5](https://github.com/5) for spec parsing (#78) ([3f56298](https://github.com/zkat/pacote/commit/3f56298))
* **deprecated:** remove underscore from manifest._deprecated ([9f4af93](https://github.com/zkat/pacote/commit/9f4af93))
* **directory:** add _resolved to directory manifests ([1d305db](https://github.com/zkat/pacote/commit/1d305db))
* **directory:** return null instead of throwing ([d35630d](https://github.com/zkat/pacote/commit/d35630d))
* **finalize:** don't try to cache manifests we can't get a good key for ([8ab1758](https://github.com/zkat/pacote/commit/8ab1758))
* **finalize:** refactored finalize-manifest code + add _integrity=false sentinel ([657b7fa](https://github.com/zkat/pacote/commit/657b7fa))
* **git:** cleaner handling of git tarball streams when caching ([11acd0a](https://github.com/zkat/pacote/commit/11acd0a))
* **git:** emit manifests from git tarball handler ([b139d4b](https://github.com/zkat/pacote/commit/b139d4b))
* **git:** fix .git exclusion, set mtime = 0 to make tarballs idempotent ([9a9fa1b](https://github.com/zkat/pacote/commit/9a9fa1b))
* **git:** fix fallback order and only fall back on hosted shortcuts ([551cb33](https://github.com/zkat/pacote/commit/551cb33))
* **git:** fix filling-out of git manifests ([95e807c](https://github.com/zkat/pacote/commit/95e807c))
* **git:** got dir packer option working with git ([7669b3e](https://github.com/zkat/pacote/commit/7669b3e))
* **headers:** nudge around some headers to make things behave ([db1e0a1](https://github.com/zkat/pacote/commit/db1e0a1))
* **manifest:** get rid of resolved-with-non-error warning ([d4d4917](https://github.com/zkat/pacote/commit/d4d4917))
* **manifest:** stop using digest for manifests ([4ddd2f5](https://github.com/zkat/pacote/commit/4ddd2f5))
* **opts:** bring opt-check up to date ([564419e](https://github.com/zkat/pacote/commit/564419e))
* **opts:** rename refreshCache to preferOnline cause much clearer ([94171d6](https://github.com/zkat/pacote/commit/94171d6))
* **prefetch:** fall back to the _integrity in the manifest if none calculated ([083ac79](https://github.com/zkat/pacote/commit/083ac79))
* **prefetch:** if there's no stream, just skip (for directory) ([714de91](https://github.com/zkat/pacote/commit/714de91))
* **registry:** fix error handling for registry tarballs ([e69539f](https://github.com/zkat/pacote/commit/e69539f))
* **registry:** nudging logging stuff around a bit ([61d62cc](https://github.com/zkat/pacote/commit/61d62cc))
* **registry:** only send auth info if tarball is hosted on the same registry ([1de5a2b](https://github.com/zkat/pacote/commit/1de5a2b))
* **registry:** redirect tarball urls to provided registry port+protocol if same host ([f50167e](https://github.com/zkat/pacote/commit/f50167e))
* **registry:** support memoizing packuments ([e7fff31](https://github.com/zkat/pacote/commit/e7fff31))
* **registry:** treat registry cache as "private" -- bumps m-f-h ([6fa1503](https://github.com/zkat/pacote/commit/6fa1503))


### Features

* **directory:** implement local dir packing ([017d989](https://github.com/zkat/pacote/commit/017d989))
* **fetch:** bump make-fetch-happen for new restarts ([cf90716](https://github.com/zkat/pacote/commit/cf90716))
* **git:** support pulling in git submodules ([5825d33](https://github.com/zkat/pacote/commit/5825d33))
* **integrity:** replace http client (#72) ([189cdd2](https://github.com/zkat/pacote/commit/189cdd2))
* **prefetch:** return cache-related info on prefetch ([623b7f3](https://github.com/zkat/pacote/commit/623b7f3))
* **registry:** allow injection of request agents ([805e5ae](https://github.com/zkat/pacote/commit/805e5ae))
* **registry:** fast request pooling ([321f84b](https://github.com/zkat/pacote/commit/321f84b))
* **registry:** registry requests now follow cache spec more closely, respect Age, etc ([9e47098](https://github.com/zkat/pacote/commit/9e47098))


### BREAKING CHANGES

* **api:** spec objects can no longer be realize-package-specifier objects. Pass a string or generate npa@>=5 spec objects to pass in.
* **integrity:** This PR replaces a pretty fundamental chunk of pacote.

* Caching now follows standard-ish cache rules for http-related requests.

* manifest() no longer includes the `_shasum` field. It's been replaced by `_integrity`, which is a Subresource Integrity hash string containing equivalent data. These strings can be parsed and managed using https://npm.im/ssri.

* Any functions that accepted `opts.digest` and/or `opts.hashAlgorithm` now expect `opts.integrity` instead.

* Packuments and finalized manifests are now cached using sha512. Tarballs can start using that hash (or any other more secure hash) once registries start supporting them: `packument.dist.integrity` will be prioritized over `packument.shasum`.

* If opts.offline is used, a `ENOCACHE` error will be returned.



<a name="1.0.0"></a>
# [1.0.0](https://github.com/zkat/pacote/compare/v0.1.1...v1.0.0) (2017-03-17)


### Bug Fixes

* **extract-stream:** adapt to tar-fs api ([aa21308](https://github.com/zkat/pacote/commit/aa21308))
* add 'use strict' to all .js files (#26) ([021bd59](https://github.com/zkat/pacote/commit/021bd59))
* **cache:** this is really a user error, so just throw ([5c9c0fa](https://github.com/zkat/pacote/commit/5c9c0fa))
* **deps:** cacache[@5](https://github.com/5).0.3 ([37cddc5](https://github.com/zkat/pacote/commit/37cddc5))
* **deps:** tar-fs[@1](https://github.com/1).15.1 ([e0d853a](https://github.com/zkat/pacote/commit/e0d853a))
* **docs:** correct fixtures table (#57) ([23d2eb4](https://github.com/zkat/pacote/commit/23d2eb4))
* **extract:** correctly detect digest cache misses ([ec6672b](https://github.com/zkat/pacote/commit/ec6672b))
* **extract:** fixed race condition ([14fd2a8](https://github.com/zkat/pacote/commit/14fd2a8))
* **finalize-manifest:** use digest to uniquify cached manifests ([931a9cb](https://github.com/zkat/pacote/commit/931a9cb))
* **http:** Fixed cache-related race condition ([b70a4b1](https://github.com/zkat/pacote/commit/b70a4b1))
* **manifest:** dir manifests should throw ENOPACKAGEJSON ([b06882d](https://github.com/zkat/pacote/commit/b06882d))
* **manifest:** ETARGET when no packages match ([ea2127d](https://github.com/zkat/pacote/commit/ea2127d))
* **manifest:** local manifest fn should return a promise ([c700622](https://github.com/zkat/pacote/commit/c700622))
* **manifest:** retry registry manifests once on ETARGET (#66) ([3b99adc](https://github.com/zkat/pacote/commit/3b99adc))
* **prefetch:** hashAlgorithm is required for hasContent ([f03d51c](https://github.com/zkat/pacote/commit/f03d51c))
* **request:** report cache write errors on end ([c102b86](https://github.com/zkat/pacote/commit/c102b86))


### Features

* **api:** support pre-realized specifiers as specs (#62) ([1d5bf39](https://github.com/zkat/pacote/commit/1d5bf39))
* **cache:** grabbing info and hasContent ([a559711](https://github.com/zkat/pacote/commit/a559711))
* **deps:** minimatch[@3](https://github.com/3).0.3 ([2bb8cd5](https://github.com/zkat/pacote/commit/2bb8cd5))
* **deps:** normalize-package-data[@2](https://github.com/2).3.5 ([4250e0d](https://github.com/zkat/pacote/commit/4250e0d))
* **directory:** directory dep support (#68) ([6d5307a](https://github.com/zkat/pacote/commit/6d5307a))
* **git:** baseline git support (#69) ([6d7eaf5](https://github.com/zkat/pacote/commit/6d7eaf5))
* **handlers:** added remote tarball support (#64) ([add1808](https://github.com/zkat/pacote/commit/add1808))
* **local:** local tarball support (#67) ([e50d625](https://github.com/zkat/pacote/commit/e50d625))
* **manifest:** handle deprecation notice (#60) ([db82dae](https://github.com/zkat/pacote/commit/db82dae))
* **manifest:** standardize manifest format ([3dd9a72](https://github.com/zkat/pacote/commit/3dd9a72))
* **manifest:** switch to cacache for caching ([8ba7249](https://github.com/zkat/pacote/commit/8ba7249))
* **prefetch:** added tarball prefetch support ([26c34ce](https://github.com/zkat/pacote/commit/26c34ce))
* **request:** accept maxSockets opt ([3987807](https://github.com/zkat/pacote/commit/3987807))
* **scopes:** new scopeTargets option (#59) ([b5db7ae](https://github.com/zkat/pacote/commit/b5db7ae))


### Performance Improvements

* **finalize-manifest:** cache finalized manifests ([fa3c430](https://github.com/zkat/pacote/commit/fa3c430))


### BREAKING CHANGES

* **manifest:** Toplevel APIs now return Promises instead of using callbacks.
