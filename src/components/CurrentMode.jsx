import focusIcon from '../assets/icons/focus.svg'
import shortIcon from '../assets/icons/short.svg'
import longIcon from '../assets/icons/long.svg'
import styles from './CurrentMode.module.css'

const modeIcons = {
  Focus: focusIcon,
  'Short Break': shortIcon,
  'Long Break': longIcon,
}

const modeStyles = {
  Focus: styles.focusMode,
  'Short Break': styles.shortMode,
  'Long Break': styles.longMode,
}

function CurrentMode({ currentMode }) {
  return (
    <div className={`${styles.modeWrapper} ${modeStyles[currentMode]}`}>
      <img
        src={modeIcons[currentMode]}
        alt="Focus icon"
        className={styles.modeIcon}
      />
      <p className={styles.mode}>{currentMode}</p>
    </div>
  )
}

export default CurrentMode
