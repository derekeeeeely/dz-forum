const path = require('path');
const withCustomBabelConfig = require('next-plugin-custom-babel-config');
const withTranspileModules = require('next-transpile-modules');
const withTypescript = require('@zeit/next-typescript');
const withLess = require('@zeit/next-less');
const withCss = require('@zeit/next-css');
const pkg = require('../web/package.json')

if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => { }
  require.extensions['.css'] = file => { }
}

const isdev = process.env.NODE_ENV === 'development';

module.exports = withCustomBabelConfig(
  withTypescript(
    withCss(
      withLess(
        withTranspileModules({
          distDir: './build',
          babelConfigFile: path.resolve('babel.config.js'),
          transpileModules: [
            '@regneva',
            '../relay/generated/.+.ts',
          ],
          lessLoaderOptions: {
            javascriptEnabled: true,
            modifyVars: {
              "primary-color": "#fe751a",
              "border-radius-base": "2px"
            }
          },
          useFileSystemPublicRoutes: false,
          generateEtags: false,
          // onDemandEntries: {
          //   maxInactiveAge: 30 * 1000,
          //   pagesBufferLength: 5
          // },
          generateBuildId: async () => {
            return String(+Date.now());
          },
          env: {
          },
          serverRuntimeConfig: {
            // Will only be available on the server side
          },
          publicRuntimeConfig: {
            // Will be available on both server and client
            staticFolder: '/static'
          },
          experimental: {
            dynamicRouting: true
          }
          // cssModules: true,
          // cssLoaderOptions: {
          //   importLoaders: 1,
          //   localIdentName: '[local]_[hash:base64:5]',
          // }
        }),
      )
    )
  ),
);
