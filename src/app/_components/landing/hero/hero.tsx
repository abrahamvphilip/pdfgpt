import Segment from '@/src/components/segment/segment';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/src/components/button/button';
import Link from 'next/link';
import './hero.scss';

export const Hero = () => {
	return (
		<>
			<Segment>
				<div className="hero">
					<h1 className="hero--header">
						Chat with your <span>docs</span> cause you ain&apos;t got no bitches
						to chat with!
					</h1>
					<p className="hero--description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam esse
						accusantium mollitia saepe quo, architecto, quia repellat animi
						veritatis molestias provident facilis officiis optio inventore.
					</p>
					<Button asChild variant="outline" size="lg" className="hero--button">
						<Link href="/dashboard">
							Get naked <ArrowRight className="hero--arrowRight" />
						</Link>
					</Button>
				</div>
			</Segment>
		</>
	);
};
