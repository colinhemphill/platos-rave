import { withContentlayer } from 'next-contentlayer';
import nodePackage from './package.json' assert { type: 'json' };

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    APP_VERSION: nodePackage.version,
  },
};

export default withContentlayer(nextConfig);
