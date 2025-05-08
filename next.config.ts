/* eslint-disable @typescript-eslint/no-require-imports */
const withMDX = require('@next/mdx')({
	images: {
		formats: ['image/webp'],
	},
});
module.exports = withMDX();
