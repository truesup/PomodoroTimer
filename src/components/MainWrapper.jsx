import { useContext } from 'react'
import { ModeContext } from '../contexts/ModeContext'
import styles from './MainWrapper.module.css'

const MainWrapper = ({ children }) => {
  const { currentMode } = useContext(ModeContext)

  return (
    <div
      className={`${styles.mainWrapper} ${
        currentMode === 'Focus'
          ? styles.focusModeWrapper
          : currentMode === 'Short Break'
          ? styles.shortModeWrapper
          : styles.longModeWrapper
      }`}>
      {children}
    </div>
  )
}

export default MainWrapper
