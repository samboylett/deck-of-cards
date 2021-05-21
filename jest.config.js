module.exports = {
    transform: {
        '\\.svg$': 'jest-transform-stub',
        '\\.jsx?$': 'babel-jest',
        '\\.tsx?$': 'babel-jest',
    },

    setupFiles: ['./spec/setup.js'],
}
