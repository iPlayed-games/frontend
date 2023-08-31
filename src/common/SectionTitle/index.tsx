import { Title, TitleBackground } from './style'

export default function SectionTitle({ title }: { title: string }) {
  return (
    <TitleBackground>
      <Title>{title}</Title>
    </TitleBackground>
  )
}
