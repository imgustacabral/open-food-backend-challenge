import { z } from 'zod';

const envVariables = z.object({
  NODE_ENV: z.string().default('development'),
  DATABASE_URL: z.string(),
  API_KEY: z.string(),
  OPEN_FOOD_FACTS_BASE_URL: z.string(),
});

try {
  process.env = envVariables.parse(process.env);
} catch (error) {
  throw new Error(`Environment variables validation error: ${error.message}`);
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
