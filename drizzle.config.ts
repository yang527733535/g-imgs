import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    // url: env.DATABASE_URL,
    url:'DATABASE_URL=postgresql://postgres:password@localhost:5432/g-imgs'
  },
  tablesFilter: ["g-imgs_*"],
} satisfies Config;
