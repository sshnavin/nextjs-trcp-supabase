import { createClient } from '@starter/backend/supabase/server';
import { appRouter } from '@starter/backend/trpc/routers/app';

export const api = () =>
    appRouter.createCaller({
        supabase: createClient(),
    });
