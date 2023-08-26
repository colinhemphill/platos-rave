import { withContentlayer } from 'next-contentlayer';
import nodePackage from './package.json' assert { type: 'json' };

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  env: {
    APP_VERSION: nodePackage.version,
  },
};

export default withContentlayer(nextConfig);
