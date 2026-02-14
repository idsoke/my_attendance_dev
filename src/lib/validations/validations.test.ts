import { describe, it, expect } from 'vitest'
import { loginSchema, userSchema } from '@/lib/validations/auth'
import { activitySchema } from '@/lib/validations/activity'
import { upaSchema, jenjangSchema } from '@/lib/validations/master'

describe('Validation Schemas', () => {
    describe('loginSchema', () => {
        it('should validate correct login data', () => {
            const data = {
                email: 'test@example.com',
                password: 'password123',
            }
            const result = loginSchema.safeParse(data)
            expect(result.success).toBe(true)
        })

        it('should reject invalid email', () => {
            const data = {
                email: 'invalid-email',
                password: 'password123',
            }
            const result = loginSchema.safeParse(data)
            expect(result.success).toBe(false)
        })

        it('should reject short password', () => {
            const data = {
                email: 'test@example.com',
                password: '12345',
            }
            const result = loginSchema.safeParse(data)
            expect(result.success).toBe(false)
        })
    })

    describe('userSchema', () => {
        it('should validate correct user data', () => {
            const data = {
                email: 'user@example.com',
                fullName: 'John Doe',
                phoneNumber: '081234567890',
                role: 'USER',
                upaId: 'upa-id',
                jenjangId: 'jenjang-id',
                password: 'password123',
            }
            const result = userSchema.safeParse(data)
            expect(result.success).toBe(true)
        })

        it('should reject invalid role', () => {
            const data = {
                email: 'user@example.com',
                fullName: 'John Doe',
                role: 'INVALID_ROLE',
            }
            const result = userSchema.safeParse(data)
            expect(result.success).toBe(false)
        })
    })

    describe('activitySchema', () => {
        it('should validate correct activity data', () => {
            const data = {
                title: 'Test Activity',
                description: 'Test description',
                date: '2024-01-01',
                location: 'Test Location',
            }
            const result = activitySchema.safeParse(data)
            expect(result.success).toBe(true)
        })

        it('should reject short title', () => {
            const data = {
                title: 'AB',
                date: '2024-01-01',
            }
            const result = activitySchema.safeParse(data)
            expect(result.success).toBe(false)
        })
    })

    describe('upaSchema', () => {
        it('should validate correct UPA data', () => {
            const data = {
                code: 'UPA001',
                name: 'UPA Jakarta',
                location: 'Jakarta',
            }
            const result = upaSchema.safeParse(data)
            expect(result.success).toBe(true)
        })
    })

    describe('jenjangSchema', () => {
        it('should validate correct Jenjang data', () => {
            const data = {
                code: 'J1',
                name: 'Junior',
                description: 'Junior Level',
            }
            const result = jenjangSchema.safeParse(data)
            expect(result.success).toBe(true)
        })
    })
})
