'use client'

import styles from './Hero.module.css'
import Leaderboard from '../Leaderboard/Leaderboard'

const HERO_TITLE: string = "Isn't it time you were rewarded for your epic skills?"
const HERO_DESCRIPTION: string =
  "Earn badges, show off your gaming prowess, and join a community where your achievements are celebrated like never before.  It's time to level up, unlock bragging rights, and embrace the glory at iPlayed!"

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.col}>
        <div className={styles.caption}>
          <h1 className={styles.title}>{HERO_TITLE}</h1>
          <p className={styles.text}>{HERO_DESCRIPTION}</p>
        </div>
      </div>
      <div className={styles.col}><Leaderboard /></div>
    </div>
  )
}

export default Hero
