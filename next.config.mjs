
import createMDX from '@next/mdx'

// Enable MDX (.md / .mdx) support
const withMDX = createMDX({
  extension: /\.mdx?$/,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow MDX files to be treated as pages
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
}

export default withMDX(nextConfig)
