import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
}

export default withContentlayer(nextConfig)
