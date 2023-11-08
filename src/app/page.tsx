import { ArrowRight } from 'lucide-react';
import Segment from '../components/segment/segment';

import Link from 'next/link';
import { Button } from '../components/button/button';
import './globals.scss';

async function Page() {
	return (
		<>
			<Segment>
				<h1>Hello PdfGPT</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
					suscipit?
				</p>
				<Button asChild variant="link" size="lg">
					<Link href="https://osenorth.co" target="_blank">
						Click me Bitch!
					</Link>
				</Button>

				<ArrowRight />
			</Segment>
		</>
	);
}

export default Page;
