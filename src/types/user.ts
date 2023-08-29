import { Venue } from './venue'

export interface User {
  id: string
  name: string
  email: string
  password: string
  username: string
  totalBadge: number
  createdAt: string
  updatedAt: string
  venue: Venue[]
}
