import { createTRPCReact } from '@trpc/react-query';
import { type AppRouter } from '@starter/backend/trpc/routers/app';

export const api = createTRPCReact<AppRouter>({});
