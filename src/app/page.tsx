import { Hero } from '@components'
import { CustomCard } from '@common'

export default function Home() {
  return (
    <>
      <Hero />
      <CustomCard>Child Text Passed In From Above</CustomCard>
    </>
  )
}
