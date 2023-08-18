'use client';

import React from 'react'
import Leaderboard from './Leaderboard';
import styles from '../styles/Hero.module.css'

const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.hero__leftcolumn}>
          <div className={styles.hero__caption}>
          <h1 className={styles.hero__title}>Isn’t it time you were rewarded for your epic skills?</h1>
          <p className={styles.hero__text}>Earn badges, show off your gaming prowess, and join a community where your achievements are celebrated like never before. It's time to level up, unlock bragging rights, and embrace the glory at iPlayed!</p>
          <button className={styles.hero__button}>Log In</button>
          </div>
        </div>
        <div className="hero__rightcolumn">
          <Leaderboard />
        </div>
      </div>
    </>
  )
}

export default Hero