module.exports = {
  roots: ['<rootDir>/src'],
  modulePaths: ['<rootDir>/src'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'jsx', 'json'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/configs/test/fileMock.js',
  },
  testPathIgnorePatterns: ['<rootDir>/src/utils/test.tsx'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/.+\\.tsx?$'],
  testEnvironment: 'jest-environment-jsdom',
  coverageReporters: [
    'clover',
    'json',
    'lcov',
    'html',
    'text',
    'text-summary',
    'cobertura',
  ],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ['src/types/*', 'src/services/*'],
}
