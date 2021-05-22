module.exports = {
    presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}],
        'next/babel',
        '@babel/preset-typescript',
        '@babel/preset-react',
    ],
    plugins: [
        [
            'babel-plugin-styled-components',
            {
                ssr: true,
                minify: true,
                transpileTemplateLiterals: true,
                pure: true,
                displayName: true,
                preprocess: false,
            },
        ],
    ],
}
