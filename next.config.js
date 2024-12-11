/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
	trailingSlash: true,
	images: { unoptimized: true },
	async redirects() {
		return []
	}
}

module.exports = nextConfig
