'use client'

import React from 'react'
//FIXME: Leaderboard component needs repair
//import Leaderboard from './Leaderboard'
import styles from './Hero.module.css'


interface content {
  title: string
  description: string
}

function createContent(name: string, description: string): Data {
  return { name, description }
}
const content = {
  title: "Isn't it time you were rewarded for your epic skills?",
  description: "Earn badges, show off your gaming prowess, and join a community where your achievements are celebrated like never before.  It's time to level up, unlock bragging rights, and embrace the glory at iPlayed!" ,
}


const Hero = () => {
  return (

      <div className={styles.hero}>
        <div className={styles.col}>
          <div className={styles.caption}>
          <h1 className={styles.title}>
            {content.title}
            </h1>
            <p className={styles.text}>
              {content.description}
            </p>
            {/* TODO:<button className={styles.buttonNeonPink}>Log In</button> */}
          </div>
        </div>
        <div className={styles.col}>{/*TODO: <Leaderboard /> */}</div>
      </div>

  )
}

export default Hero
