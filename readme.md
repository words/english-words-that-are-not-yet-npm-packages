# english-words-that-are-not-yet-npm-packages

[![Build][build-badge]][build]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

A package for finding available package names in the npm registry (works
locally).

## Install

You probably want it globally:

[npm][]:

```sh
npm install --global english-words-that-are-not-yet-npm-packages
```

[yarn][]:

```sh
yarn global add english-words-that-are-not-yet-npm-packages
```

## API

```js
var free = require('english-words-that-are-not-yet-npm-packages')

console.log(free)
```

Yields:

```js
[
  'aahed',
  'aahing',
  'aahs',
  'aal',
  'aalii',
  'aaliis',
  'aals',
  'aardvarks',
  'aardwolf',
  'aardwolves'
]
```

## CLI

```sh
english-words-that-are-not-yet-npm-packages | grep foo | tail -n 5
english-words-that-are-not-yet-npm-packages | wc -l
```

Yields:

```txt
webfooted
wholefood
wholefoods
woollyfoot
woollyfoots
248891
```

## Keeping up to date

[`all-the-package-names`][all-the-package-names] is updated daily by a bot.
To be sure you’re getting up-to-date results, reinstall this package.

## Related

*   [`words/an-array-of-english-words`][all-the-package-names]
    — List of ~275,000 English words
*   [`nice-registry/all-the-package-names`](https://github.com/nice-registry/all-the-package-names)
    — List of all the public package names on npm
*   [`feross/available`](https://github.com/feross/available)
    — Scan npm for available package names

## License

[MIT][license] © [Zeke Sikelianos][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/words/english-words-that-are-not-yet-npm-packages.svg

[build]: https://travis-ci.org/words/english-words-that-are-not-yet-npm-packages

[downloads-badge]: https://img.shields.io/npm/dm/english-words-that-are-not-yet-npm-packages.svg

[downloads]: https://www.npmjs.com/package/english-words-that-are-not-yet-npm-packages

[size-badge]: https://img.shields.io/bundlephobia/minzip/english-words-that-are-not-yet-npm-packages.svg

[size]: https://bundlephobia.com/result?p=english-words-that-are-not-yet-npm-packages

[npm]: https://docs.npmjs.com/cli/install

[yarn]: https://classic.yarnpkg.com/en/docs/cli/add/

[license]: license

[author]: http://zeke.sikelianos.com

[all-the-package-names]: https://github.com/nice-registry/all-the-package-names
