import { z } from "zod"

export const activitySchema = z.object({
    title: z.string().min(3, "Judul minimal 3 karakter"),
    description: z.string().optional(),
    date: z.string().transform((str) => new Date(str)), // Input as string, convert to Date
    location: z.string().optional(),
    flag: z.number().optional().default(0), // 0 = Normal, 1 = Monitoring
    answers: z.any().optional(),
})
