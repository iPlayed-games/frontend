import { Hero } from '@components'
import { StyledCard } from 'common/StyledCard'

export default function Home() {
  return (
    <main>
      <Hero />
      <StyledCard>Child Text Passed In From Above</StyledCard>
    </main>
  )
}
