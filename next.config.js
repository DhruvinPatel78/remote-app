const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    const { isServer } = options;
    config.experiments = { layers: true, topLevelAwait: true };
    config.devtool= 'inline-source-map';
    config.plugins.push(
        new NextFederationPlugin({
          name: 'remoteApp',
          filename: 'static/chunks/remoteEntry.js',
          exposes: {
            './counter': './src/components/Counter.tsx',
          }
        })
    );
    return config;
  }
}

module.exports = nextConfig
