# is-valid-birthdate [![Build Status](https://travis-ci.org/diessica/is-valid-birthdate.svg?branch=master)](https://travis-ci.org/diessica/is-valid-birthdate)

> Check if a string or date object is a valid birthdate.

## Install

```sh
$ npm install --save is-valid-birthdate
```

## Usage

```js
const isValidBirthdate = require('is-valid-birthdate')

isValidBirthdate('1998/02/26') // =>  true
isValidBirthdate('2014/12/03', { minAge: 18 }) // => false
isValidBirthdate(new Date()) // => false
isValidBirthdate('2025-12-26') // => false
```

## API
### `isValidBirthdate(date[, options])`

#### date
Type: `string` or `Date object`

#### options
Type: `object` <br />
Default: `{ maxAge: 120,  minAge: 0 }`

## License

MIT
