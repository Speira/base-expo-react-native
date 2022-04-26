module.exports = {
  // Load setup-tests.js before test execution
  setupFilesAfterEnv: ['<rootDir>setup-tests.js'],
  preset: 'jest-expo',
  verbose: true,
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
  ],
}
