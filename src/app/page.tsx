import { ArrowRight } from 'lucide-react';
import Segment from '../components/segment/segment';

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
				<Button variant="default" size="lg">
					Click me Bitch!
				</Button>

				<ArrowRight />
			</Segment>
		</>
	);
}

export default Page;
