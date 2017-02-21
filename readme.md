# english-words-that-are-not-yet-npm-packages

A CLI for finding available package names in the npm registry

## Installation

This is a command line tool, so it should be installed globally:

```sh
yarn global add english-words-that-are-not-yet-npm-packages
```

## Usage

When you run `english-words-that-are-not-yet-npm-packages`, it prints
all available words to stdout, one word per line:

```sh
english-words-that-are-not-yet-npm-packages | grep foo | tail -n 5
# webfooted
# wholefood
# wholefoods
# woollyfoot
# woollyfoots

english-words-that-are-not-yet-npm-packages | wc -l
# 255429
```

For context, you can also install the two datasets depended on by this package:

[an-array-of-english-words](http://ghub.io/an-array-of-english-words):

```sh
yarn global add an-array-of-english-words

words | wc -l
# 274915
```

[all-the-package-names](http://ghub.io/all-the-package-names):

```sh
yarn global add all-the-package-names

all-the-package-names | wc -l
# 416043
```

## Keeping Up to Date

The `all-the-package-names` dependency is updated daily by a bot. To be sure
you're getting up-to-date results, just reinstall this package:

```sh
yarn global add english-words-that-are-not-yet-npm-packages
```

## License

MIT
