'use strict'

var test = require('ava')
var isValidBirthdate = require('./')

test('valid birthdate', t => {
  t.true(isValidBirthdate('1998/02/26'))
})

test('invalid birthdate', t => {
  t.false(isValidBirthdate(new Date()))
})

test('invalid birthdate if maximum age is 70', t => {
  t.false(isValidBirthdate('1900-02-26', { maxAge: 70 }))
})

test('invalid birthdate if minimum age is 18', t => {
  t.false(isValidBirthdate('2015-07-30', { minAge: 18 }))
})

test('valid birthdate if minimum age is 18', t => {
  t.true(isValidBirthdate('1992-11-05', { minAge: 18 }))
})

test('throw error for invalid date argument', t => {
  t.throws(() => isValidBirthdate(28))
})
