'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { PropsWithChildren, useState } from 'react';
import { trpc } from './client';

const Providers = ({ children }: PropsWithChildren) => {
	const [queryclient] = useState(() => new QueryClient());
	const [trpcClient] = useState(() =>
		trpc.createClient({
			links: [
				httpBatchLink({
					url: 'http://localhost:3000/api/trpc',
				}),
			],
		})
	);

	return (
		<trpc.Provider client={trpcClient} queryClient={queryclient}>
			<QueryClientProvider client={queryclient}>{children}</QueryClientProvider>
		</trpc.Provider>
	);
};

export default Providers;
