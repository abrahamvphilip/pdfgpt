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
						Welcome to pdfGPT, where you chat with your docs so you don&apos;t
						feel like a loser (you are though!). We&apos;re like the sexy
						librarian of the tech world - we&apos;ve got the brains, the looks,
						and we&apos;re not afraid to get down and dirty with your Docs.
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
