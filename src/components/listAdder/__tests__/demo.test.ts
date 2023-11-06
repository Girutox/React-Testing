import { test, expect } from 'vitest'
import { sum, User } from '../../../utils/utils'

test.skip("sum function should return the sum of the two numbers provided", () => {
  // Arrange
  const number1 = 1
  const number2 = 9

  // Act
  const result = number1 + number2

  // Assert
  expect(sum(number1, number2)).toBe(result)
})

test.skip("getFullName method should return the combination of firstName and lastName", () => {
  // Arrange
  const firstName = "Maiquin"
  const lastName = "CCarampa"
  const maiquin = new User(firstName, lastName)

  // Act
  const result = `${firstName} ${lastName}`

  // Assert
  expect(maiquin.getFullName()).toBe(result)
})