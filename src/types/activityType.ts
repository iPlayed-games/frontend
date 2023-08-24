export interface Activity {
     id: string;
  name: string
  description: string
  image: string
  startTimes: number[]
  duration: number
  category: string[]
  minPlayers: number
  maxPlayers: number
  ageRestriction: number
  price: number
}
