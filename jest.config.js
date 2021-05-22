module.exports = {
    transform: {
        '\\.svg$': 'jest-transform-stub',
        '\\.jsx?$': 'babel-jest',
        '\\.tsx?$': 'babel-jest',
    },

    setupFiles: ['./spec/setup.js'],

    collectCoverage: true,

    collectCoverageFrom: [
        'components/**/*.{ts,tsx,js,jsx}',
        'helpers/**/*.{ts,tsx,js,jsx}',
        'hooks/**/*.{ts,tsx,js,jsx}',
        'types/**/*.{ts,tsx,js,jsx}',
    ],

    coveragePathIgnorePatterns: [
        '/node_modules/',
        '\\.stories\\.(tsx?|jsx?)$',
    ],

    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
}
