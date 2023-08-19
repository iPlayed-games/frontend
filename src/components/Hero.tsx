'use client';

import React from 'react'
import Leaderboard from './Leaderboard';
import styles from '../styles/Hero.module.css'

const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.col}>
          <div className={styles.caption}>
          <h1 className={styles.title}>Isn’t it time you were rewarded for your epic skills?</h1>
          <p className={styles.text}>Earn badges, show off your gaming prowess, and join a community where your achievements are celebrated like never before. It's time to level up, unlock bragging rights, and embrace the glory at iPlayed!</p>
          <button className={styles.button}>Log In</button>
          </div>
        </div>
        <div className={styles.col}>
          <Leaderboard />
        </div>
      </div>
    </>
  )
}

export default Hero