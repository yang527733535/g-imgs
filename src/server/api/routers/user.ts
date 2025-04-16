import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { posts, users } from "~/server/db/schema";


export const userRouter = createTRPCRouter({
    create: publicProcedure
        .input(
            z.object({
                id: z.string(),
                username: z.string().optional(),
                email: z.string().email().optional(),
                avatarUrl: z.string().url().optional()
            })
        )
        .mutation(async ({ ctx, input }) => {
            return ctx.db.insert(users).values(input);
        }),
});