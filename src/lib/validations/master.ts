import { z } from "zod"

export const upaSchema = z.object({
    code: z.string().min(1, "Kode wajib diisi"),
    name: z.string().min(1, "Nama wajib diisi"),
    location: z.string().optional(),
    dpcId: z.string().optional().nullable(),
})

export const jenjangSchema = z.object({
    code: z.string().min(1, "Kode wajib diisi"),
    name: z.string().min(1, "Nama wajib diisi"),
    description: z.string().optional(),
})
