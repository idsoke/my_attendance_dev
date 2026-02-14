import { z } from "zod"

export const loginSchema = z.object({
    email: z.string().email({ message: "Email tidak valid" }),
    password: z.string().min(6, { message: "Password minimal 6 karakter" }),
})

export const userSchema = z.object({
    email: z.string().email(),
    fullName: z.string().min(2),
    phoneNumber: z.string().min(1, { message: "Nomor telepon wajib diisi" }).refine((val) => val.startsWith("0"), { message: "Nomor telepon harus diawali dengan angka 0" }),
    role: z.enum(["ADMIN", "EDITOR", "USER", "PENGGUNA", "SEKRETARIS"]),
    upaId: z.string().optional(),
    jenjangId: z.string().optional(),
    password: z.string().min(6).optional(), // Optional for updates
})
