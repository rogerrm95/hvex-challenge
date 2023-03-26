import { BadgeItemContainer } from './styles'

interface BadgeItemProps {
  text: string
  sourceImage: string
  descriptionImage?: string
}

export function BadgeItem({
  sourceImage,
  text,
  descriptionImage,
}: BadgeItemProps) {
  return (
    <BadgeItemContainer>
      <div>
        <img
          src={sourceImage}
          alt={descriptionImage}
          title={descriptionImage}
        />
      </div>

      <span>{text}</span>
    </BadgeItemContainer>
  )
}
