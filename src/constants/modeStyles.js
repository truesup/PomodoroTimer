import appStyles from '../App.module.css'
import currentModeStyles from '../components/CurrentMode.module.css'

export const modes = [
  'Focus',
  'Short Break',
  'Focus',
  'Short Break',
  'Focus',
  'Short Break',
  'Focus',
  'Long Break',
]

export const modeBg = {
  Focus: appStyles.focusBg,
  'Short Break': appStyles.shortBg,
  'Long Break': appStyles.longBg,
}

export const modeIcons = {
  Focus: '/src/assets/icons/focus.svg',
  'Short Break': '/src/assets/icons/short.svg',
  'Long Break': '/src/assets/icons/long.svg',
}

export const modeStyles = {
  Focus: currentModeStyles.focusMode,
  'Short Break': currentModeStyles.shortMode,
  'Long Break': currentModeStyles.longMode,
}
