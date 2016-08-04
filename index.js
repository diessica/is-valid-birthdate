'use strict'

var now = new Date()
var defaults = { maxAge: 120, minAge: 0 }

module.exports = function isValidBirthdate (date, options) {
  options = Object.assign({}, defaults, options)

  if (typeof (date) === 'string') {
    date = new Date(date)
  }

  if (date instanceof Date === false) {
    throw new Error(
      'isValidBirthdate(): First argument (date) expects a date object.'
    )
  }

  if (typeof (options) !== 'object') {
    throw new Error(
      'isValidBirthdate(): Second argument (options) expects an object.'
    )
  }

  var age = now.getFullYear() - date.getFullYear()

  return (
    date < now &&
    age >= options.minAge &&
    age <= options.maxAge
  )
}
