export interface Venue {
  id: string
  name: string
  email: string
  locationId: string
  description: string
  logo: string
  mainPhoto: string
  category: string[]
  isAcessibility: boolean
  workingHoursOpen: number
  workingHoursClose: number
  createdAt: string
  updatedAt: string
  userId: string
}
