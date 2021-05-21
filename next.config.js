module.exports = {
    target: 'serverless',

    webpack: (config) => {
        config.module.rules.push({
            test: /\.png$/,
            use: [
                {
                    loader: 'url-loader',
                },
            ],
        })
        return config
    },
}
