import { User } from '../types/userType'

export function getSortedHighScores(userData: User[], recordSize: number): User[] {
  if (userData.length > 0) {
    return [...userData].sort((a: User, b: User) => b.totalBadge - a.totalBadge).slice(0, recordSize)
  }
  return []
}
