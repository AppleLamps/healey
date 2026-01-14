export type ColorKey = 'danger' | 'money' | 'muted'

export const colorClasses: Record<ColorKey, {
  text: string
  bg: string
  bgLight: string
  bgHover: string
  border: string
  borderHover: string
}> = {
  danger: {
    text: 'text-danger',
    bg: 'bg-danger',
    bgLight: 'bg-danger/10',
    bgHover: 'bg-danger/5',
    border: 'border-danger/30',
    borderHover: 'border-danger/50',
  },
  money: {
    text: 'text-money',
    bg: 'bg-money',
    bgLight: 'bg-money/10',
    bgHover: 'bg-money/5',
    border: 'border-money/30',
    borderHover: 'border-money/50',
  },
  muted: {
    text: 'text-muted',
    bg: 'bg-muted',
    bgLight: 'bg-muted/10',
    bgHover: 'bg-muted/5',
    border: 'border-muted/30',
    borderHover: 'border-muted/50',
  },
}
