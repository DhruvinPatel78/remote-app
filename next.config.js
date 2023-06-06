const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    const { isServer } = options;
    config.experiments = { layers: true, topLevelAwait: true };
    config.plugins.push(
        new NextFederationPlugin({
          name: 'remoteApp',
          remotes: {
            hostApp: `hostApp@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          },
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
