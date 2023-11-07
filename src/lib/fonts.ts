import localFont from 'next/font/local';

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
