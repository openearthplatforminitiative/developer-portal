/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	images: {
		unoptimized: true,
		remotePatterns: [new URL("https://cdn.sanity.io")],
	},
}

module.exports = nextConfig
