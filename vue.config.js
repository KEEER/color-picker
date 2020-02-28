const path = require('path')

module.exports = {
  lintOnSave: false,
  pages: { index: { entry: 'demo/index.js', template: 'demo/index.html' } },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  includePaths: [ path.resolve(__dirname, 'node_modules') ],
                }
              },
            },
          ],
        },
      ],
    },
  },
}
