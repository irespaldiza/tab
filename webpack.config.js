const path = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Compilation } = require('webpack');

const inlineBundle = {
  apply(compiler) {
    compiler.hooks.compilation.tap('InlineBundle', (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).alterAssetTagGroups.tap('InlineBundle', (data) => {
        for (const tag of [...data.headTags, ...data.bodyTags]) {
          if (tag.tagName !== 'script' || !tag.attributes.src) continue;

          const bundle = compilation.getAsset('bundle.js');
          tag.innerHTML = bundle.source.source().toString().replace(/<\/script/gi, '<\\/script');
          delete tag.attributes.src;
          delete tag.attributes.defer;
        }
        return data;
      });

      compilation.hooks.processAssets.tap(
        { name: 'InlineBundle', stage: Compilation.PROCESS_ASSETS_STAGE_REPORT },
        () => compilation.deleteAsset('bundle.js'),
      );
    });
  },
};

module.exports = {
  devtool: false,
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '',
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
      scriptLoading: 'blocking',
    }),
    inlineBundle,
  ],
  devServer: {
    host: 'localhost',
    static: {
      directory: path.join(__dirname, 'img'),
      publicPath: '/img',
      watch: false,
    },
  },
};
