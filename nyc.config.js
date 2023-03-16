module.exports = {
  reporter: [
    'html',
    'lcov',
    'text-summary',
  ],
  'check-coverage': true,
  all: true,
  branches: 100,
  lines: 100,
  functions: 100,
  statements: 100,
  include: [
    'lib/**/*.ts',
    'packages/**/*.ts',
  ],
  exclude: [
    '**/*.d.ts',
  ],
};
