export function getWorkdaysInMonth(year: number, month: number): Date[] {
  const days: Date[] = []
  const daysInMonth = new Date(year, month, 0).getDate()
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, month - 1, d)
    const dow = date.getDay()
    if (dow !== 0 && dow !== 6) days.push(date)
  }
  return days
}

export function toLocalDateKey(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

export type LeaveEntry = {
  type: string
  startDate: Date
  endDate: Date
}

export function resolveStatus(
  presensiStatus: string | null | undefined,
  leaves: LeaveEntry[],
  date: Date
): string {
  if (presensiStatus) return presensiStatus

  const dateKey = toLocalDateKey(date)
  const match = leaves.find(lr => {
    const startKey = toLocalDateKey(new Date(lr.startDate))
    const endKey = toLocalDateKey(new Date(lr.endDate))
    return dateKey >= startKey && dateKey <= endKey
  })

  if (match) {
    if (match.type === 'SAKIT') return 'SICK'
    if (match.type === 'DINAS') return 'DINAS'
    return 'PERMIT'
  }

  return 'ABSENT'
}

export function groupWorkdaysByWeek(workdays: Date[]): Array<{ label: string; dates: Date[] }> {
  const weeks: Array<{ label: string; dates: Date[] }> = []
  let current: Date[] = []

  for (const wd of workdays) {
    if (current.length > 0 && wd.getDay() === 1) {
      weeks.push({ label: `Minggu ${weeks.length + 1}`, dates: current })
      current = []
    }
    current.push(wd)
  }
  if (current.length > 0) weeks.push({ label: `Minggu ${weeks.length + 1}`, dates: current })

  return weeks
}
