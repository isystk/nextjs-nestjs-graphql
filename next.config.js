const path = require('path')
const pkg = require("./package");

const nextConfig = {
  env: {
    APP_NAME: pkg.name,
    APP_DESCRIPTION: pkg.description,
    AWS_REGION: process.env.AWS_REGION,
    AWS_USER_POOL_ID: process.env.AWS_USER_POOL_ID,
    AWS_CLIENT_ID: process.env.AWS_CLIENT_ID
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
