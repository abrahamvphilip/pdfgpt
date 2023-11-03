import { publicProcedure, router } from './trpc';
export const appRouter = router({
	os: publicProcedure.query(() => {
		return 'ov-os';
	}),
	ov: publicProcedure.query(() => {
		return 'OPENVERIZON®';
	}),
});
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
