/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		config.module.rules.push({
			test: /\.(mp4|webm)$/i,
			use: {
				loader: 'file-loader',
				options: {
					name: '[name].[hash].[ext]',
					outputPath: 'static/videos',
				},
			},
		});

		return config;
	},

	images: {
		domains: [
			'images.unsplash.com',
			'cdn.dribbble.com',
			'youtu.be',
			'media.discordapp.net',
		],
	},
};

module.exports = nextConfig;
