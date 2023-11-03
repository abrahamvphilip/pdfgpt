import { UserButton } from '@clerk/nextjs';

import Segment from '../components/segment/segment';

import { GridOverlay } from '../components/devtools/gridOverlay';
import './globals.scss';

async function Page() {
	return (
		<>
			<GridOverlay columns={12} baseline={8} button />
			<Segment>
				<h1>OPENVERIZON® OS FOR TECH STARTUPS UNDER VINCENT HOLDINGS</h1>
				<UserButton afterSignOutUrl="/" />
			</Segment>
		</>
	);
}

export default Page;
