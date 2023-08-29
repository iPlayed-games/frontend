const nextJest = require('next/jest')
const createJestConfig = nextJest({
  dir: './',
})
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '@components': '<rootDir>/src/components/index',
    '@typing': '<rootDir>/src/typing/index',
    '@svg': '<rootDir>/src/assets/svg/index',
  },
}
module.exports = createJestConfig(customJestConfig)
