# fetch-wikipedia-page-revision

**Fetch a revision of a Wikipedia page as mobile HTML.**

[![npm version](https://img.shields.io/npm/v/fetch-wikipedia-page-revision.svg)](https://www.npmjs.com/package/fetch-wikipedia-page-revision)
[![build status](https://img.shields.io/travis/derhuerst/fetch-wikipedia-page-revision.svg)](https://travis-ci.org/derhuerst/fetch-wikipedia-page-revision)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/fetch-wikipedia-page-revision.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)


## Installing

```shell
npm install fetch-wikipedia-page-revision
```


## Usage

```js
const fetchPageRevision = require('fetch-wikipedia-page-revision')

const slug = 'Barack_Obama'
const revId = 792351024

fetchPageRevision(slug, revId)
.then(console.log)
.catch(console.error)
```

The [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/promise) will resolve with a string of HTML.


## Contributing

If you have a question or have difficulties using `fetch-wikipedia-page-revision`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/fetch-wikipedia-page-revision/issues).
