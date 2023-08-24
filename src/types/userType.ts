import { Venue } from './venueType'

export interface User {
  id: string
  name: string
  email: string
  locationId: string
  description: string
  password: string
  username: string
  totalBadge: number
  createdAt: string
  updatedAt: string
  venue: Venue[]
}
