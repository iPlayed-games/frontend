import { Label, LabelContainer } from './style'

export default function CategoryLabel({ label }: { label: string }) {
  return (
    <LabelContainer>
      <Label>{label}</Label>
    </LabelContainer>
  )
}
