import localFont from "next/font/local";

export const ibm = localFont({
	src: [
		{
			path: '../assets/fonts/ibm/IBMPlexSans-Thin.woff2',
			weight: '100',
		},
		{
			path: '..//assets/fonts/ibm/IBMPlexSans-ExtraLight.woff2',
			weight: '200',
		},
	],
	variable: '--ibm',
});

// export const ave = localFont({
// 	src: [
// 		{
// 			path: '..//assets/fonts/avenir/Avenir-Light.woff2',
// 			weight: '300',
// 		},
// 		{
// 			path: '..//assets/fonts/avenir/Avenir-Book.woff2',
// 			weight: '400',
// 		},
// 		{
// 			path: '..//assets/fonts/avenir/Avenir-BookOblique.woff2',
// 			weight: '400',
// 			style: 'oblique',
// 		},
// 		{
// 			path: '..//assets/fonts/avenir/Avenir-Medium.woff2',
// 			weight: '500',
// 		},
// 		{
// 			path: '..//assets/fonts/avenir/Avenir-Black.woff2',
// 			weight: '800',
// 		},
// 	],
// 	variable: '--ave',
// });
