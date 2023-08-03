"use client";

import { Animated, Basic, bounce, Combined } from '../styles/styles'


export default function Home() {
  return (
    <main id="MainElement">
      <h1>This is a page</h1>
      <Animated animation={bounce}>Let's bounce.</Animated>
    </main>
  )
}
