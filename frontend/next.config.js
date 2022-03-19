const path = require('path')
const pkg = require("./package");

const nextConfig = {
  env: {
    APP_NAME: pkg.name,
    APP_DESCRIPTION: pkg.description,
    internalEndpointUrl: process.env.internalEndpointUrl,
    externalEndpointUrl: process.env.externalEndpointUrl,
  },
  webpack: (config) => {
    // src ディレクトリをエイリアスのルートに設定
    config.resolve.alias['@'] = path.resolve(__dirname, 'src')
    return config
  },
  typescript: {
    // ビルド時のTypescriptエラーを無視する
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig
