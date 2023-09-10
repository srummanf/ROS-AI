/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = nextConfig

// next.config.js
module.exports = {
    reactStrictMode: true,
    experimental: {
        reactRoot: true,
        concurrentFeatures: true,
    },
}
