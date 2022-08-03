const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    main:'./src/js/main.js',
    // sub:'./src/js/sub.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: './assets/[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "css-loader",
            options: {
              // CSS内のurl()メソッドの取り込みを禁止する
              url: false,
              // ソースマップの利用有無
              sourceMap: true,
              // Sass+PostCSSの場合は2を指定
              importLoaders: 2,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              // PostCSS側でもソースマップを有効にする
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  // Autoprefixerを有効化
                  // ベンダープレフィックスを自動付与する
                  ["autoprefixer", { grid: true }],
                ],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            }
          }
        ]
      }
    ]
  }
}
