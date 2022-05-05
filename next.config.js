/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
module.exports = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};
const withVideos = require("next-videos");
module.exports = withVideos();

module.exports = nextConfig;
