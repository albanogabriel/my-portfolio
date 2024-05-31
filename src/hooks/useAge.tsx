export function useAge() {
  const currentDate = new Date()
  const birthDate = '1997-10-15'
  const birthDateNewDate = new Date('1997-10-15')
  const difference = Number(currentDate.getTime() - birthDateNewDate.getTime())
  const age = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25))

  return { age, birthDate }
}
