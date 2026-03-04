const config = {
  transformIgnorePatterns: ['node_modules'],
  collectCoverage: true,
  coverageReporters: [
    'json',
    'html',
    'lcov',
  ],
  coveragePathIgnorePatterns: [
    '/tests/',
  ],
  testRegex: [
    '/tests/.*\\.spec\\.cjs$',
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
    'mjs',
    'cjs',
  ],
  moduleDirectories: ['tests', 'src', 'node_modules'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  verbose: true,
}

module.exports = config
