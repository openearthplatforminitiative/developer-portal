/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone",
	images: { unoptimized: true },
	async redirects() {
		return []
	},
}

module.exports = nextConfig
