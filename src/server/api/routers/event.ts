import { z } from "zod";

import { createTRPCRouter, isAdmin, t } from "../trpc";

export const eventRouter = createTRPCRouter({
  getEventsByProjectId: t.procedure
    .input(
      z.object({
        projectId: z.string(),
      }),
    )
    .use(isAdmin)
    .query(async ({ ctx, input }) => {
      const { projectId } = input;
      const events = await ctx.prisma.event.findMany({
        where: {
          projectId,
        },
      });

      return events;
    }),
  updateEventById: t.procedure
    .input(
      z.object({
        projectId: z.string(),
        id: z.string(),
        name: z.string(),
        start: z.date(),
        end: z.date(),
        description: z.string(),
        inPerson: z.boolean(),
        location: z.string(),
      }),
    )
    .use(isAdmin)
    .mutation(async ({ ctx, input }) => {
      const { id, name, start, end, description, inPerson, location } = input;
      const event = await ctx.prisma.event.update({
        where: {
          id,
        },
        data: {
          name,
          start,
          end,
          description,
          inPerson,
          location,
        },
      });

      return event;
    }),
  createEvent: t.procedure
    .input(
      z.object({
        projectId: z.string(),
        name: z.string(),
        start: z.date(),
        end: z.date(),
        description: z.string(),
        inPerson: z.boolean(),
        location: z.string(),
      }),
    )
    .use(isAdmin)
    .mutation(async ({ ctx, input }) => {
      const { projectId, name, start, end, description, inPerson, location } =
        input;
      const event = await ctx.prisma.event.create({
        data: {
          projectId,
          name,
          start,
          end,
          description,
          inPerson,
          location,
        },
      });

      return event;
    }),
  deleteEventById: t.procedure
    .input(
      z.object({
        id: z.string(),
        projectId: z.string(),
      }),
    )
    .use(isAdmin)
    .mutation(async ({ ctx, input }) => {
      const { id } = input;
      const event = await ctx.prisma.event.delete({
        where: {
          id,
        },
      });
      return event;
    }),
});
