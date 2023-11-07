import Layout from '../components/app-layout/layout';
import './globals.scss';

import { ibm } from '../lib/fonts';
import Providers from './_trpc/providers';

export const metadata = {
	title: 'pdfGPT',
	description:
		'An exceptionally advanced starter template, designed for large-scale, industry-leading applications and startups under Vincent Holdings.',
};

interface IRootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: IRootLayoutProps) {
	return (
		<html lang="en">
			<body className={ibm.variable}>
				<Providers>
					<Layout>{children}</Layout>
				</Providers>
			</body>
		</html>
	);
}
