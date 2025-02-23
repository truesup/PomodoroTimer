import infoIcon from '../assets/icons/info.svg'
import playIcon from '../assets/icons/play.svg'
import nextIcon from '../assets/icons/next.svg'

export const buttonsConfig = [
  { type: 'aside', icon: infoIcon, action: null },
  { type: 'main', icon: playIcon, action: null },
  { type: 'aside', icon: nextIcon, action: 'nextMode' },
]
