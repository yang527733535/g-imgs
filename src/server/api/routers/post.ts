import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { posts } from "~/server/db/schema";
import winston from "winston";  // 新增日志库

// // 新增 Winston 配置
// const logger = winston.createLogger({
//   level: 'info',
//   format: winston.format.json(),
//   transports: [
//     new winston.transports.File({ 
//       filename: '/app/logs/application.log',
//       format: winston.format.combine(
//         winston.format.timestamp(),
//         winston.format.json()
//       )
//     }),
//     new winston.transports.Console()  // 同时保留控制台输出
//   ],
// });

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      // logger.info('hello cal', { input });  // 修改为使用 logger
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
   
  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(posts).values({
        name: input.name,
      });
    }),

  getLatest: publicProcedure.query(async ({ ctx }) => {
    const post = await ctx.db.query.posts.findFirst({
      orderBy: (posts, { desc }) => [desc(posts.createdAt)],
    });

    return post ?? null;
  }),
});
