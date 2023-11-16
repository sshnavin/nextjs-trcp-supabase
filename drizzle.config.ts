import type { Config } from 'drizzle-kit';

export default {
    schema: './backend/drizzle/schema.ts',
    out: './backend/drizzle/migrations',
} satisfies Config;
