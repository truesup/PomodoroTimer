import { useContext, useEffect } from 'react'
import { ModeContext } from '../contexts/ModeContext'
import styles from './Header.module.css'

const Header = () => {
  const { currentMode } = useContext(ModeContext)

  useEffect(() => {
    console.log(currentMode)
  })

  return (
    <div
      className={`${styles.headerWrapper} ${
        currentMode === 'Focus'
          ? styles.focusModeWrapper
          : currentMode === 'Short Break'
          ? styles.shortModeWrapper
          : styles.longModeWrapper
      }`}>
      {currentMode === 'Focus'
        ? 'Focus'
        : currentMode === 'Short Break'
        ? 'Short Break'
        : 'Long Break'}
    </div>
  )
}

export default Header
