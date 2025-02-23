import { modeIcons, modeStyles } from '../constants/modeStyles'
import styles from './CurrentMode.module.css'

function CurrentMode({ currentMode }) {
  return (
    <div className={`${styles.modeWrapper} ${modeStyles[currentMode]}`}>
      <img
        src={modeIcons[currentMode]}
        alt={`${currentMode} icon`}
        className={styles.modeIcon}
      />
      <p className={styles.mode}>{currentMode}</p>
    </div>
  )
}

export default CurrentMode
