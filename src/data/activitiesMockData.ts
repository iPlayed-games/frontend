import { type Activity } from '../types/activity'

export const activityData: Activity[] = [
  {
    id: '64e559e9671afb1e55007b2b',
    name: 'play game 1',
    description: 'write something about the activity',
    image: 'http://www.playgame.com/image1',
    startTimes: [1692349200000, 1692381600000],
    duration: 45,
    category: ['Indoor'],
    minPlayers: 2,
    maxPlayers: 10,
    ageRestriction: 18,
    price: 50.0,
  },
  {
    id: '64e559e9671afb1e56007b2b',
    name: 'Badminton',
    description: 'Like tennis, but not.',
    image: 'http://www.playgame.com/image1',
    startTimes: [1692345600000, 1692352800000],
    duration: 100,
    category: ['Indoor'],
    minPlayers: 2,
    maxPlayers: 4,
    ageRestriction: 10,
    price: 70.0,
  },
  {
    id: '64e559e9671afb1e57007b2b',
    name: 'Tennis',
    description: 'Like badminton, but not.',
    image: 'http://www.playgame.com/image1',
    startTimes: [1692345600000, 1692381600000],
    duration: 60,
    category: ['Outdoor'],
    minPlayers: 2,
    maxPlayers: 4,
    ageRestriction: 14,
    price: 102.5,
  },
]
