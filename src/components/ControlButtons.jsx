import Button from './Button'
import infoIcon from '../assets/icons/info.svg'
import playIcon from '../assets/icons/play.svg'
import pauseIcon from '../assets/icons/pause.svg'
import nextIcon from '../assets/icons/next.svg'
import styles from './ControlButtons.module.css'

const modeBg = {
  Focus: styles.focusBg,
  'Short Break': styles.shortBg,
  'Long Break': styles.longBg,
}

function ControlButtons({ currentMode, onNextMode }) {
  return (
    <div className={styles.buttonsWrapper}>
      <Button
        className={`${styles.asideButton} ${modeBg[currentMode]}`}
        icon={infoIcon}
      />
      <Button
        className={`${styles.mainButton} ${modeBg[currentMode]}`}
        icon={playIcon}
      />
      <Button
        className={`${styles.asideButton} ${modeBg[currentMode]}`}
        icon={nextIcon}
        onClick={onNextMode}
      />
    </div>
  )
}

export default ControlButtons
