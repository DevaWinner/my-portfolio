import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export",
	images: {
		unoptimized: true,
	},
	reactStrictMode: true,
	poweredByHeader: false,
	allowedDevOrigins: [
		"local-origin.dev",
		"*.local-origin.dev",
		"ad52-105-117-4-51.ngrok-free.app",
	],
};

export default nextConfig;
