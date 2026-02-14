import { describe, it, expect } from 'vitest'
import { cn, formatCurrency } from '@/lib/utils'

describe('Utils', () => {
    it('cn merges classes correctly', () => {
        expect(cn('bg-red-500', 'text-white')).toBe('bg-red-500 text-white')
        expect(cn('bg-red-500', 'bg-blue-500')).toBe('bg-blue-500') // Tailwind merge
    })

    it('formatCurrency formats IDR correctly', () => {
        // Note: This depends on the locale environment, might need adjustment or mocking
        const result = formatCurrency(10000)
        expect(result).toContain('Rp')
        expect(result).toContain('10.000')
    })
})
