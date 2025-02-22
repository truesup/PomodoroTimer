import { useState } from 'react'
import CurrentMode from './components/CurrentMode'
import Timer from './components/Timer'
import ControlButtons from './components/ControlButtons'
import styles from './App.module.css'

const modes = [
  'Focus',
  'Short Break',
  'Focus',
  'Short Break',
  'Focus',
  'Short Break',
  'Focus',
  'Long Break',
]

const modeBg = {
  Focus: styles.focusBg,
  'Short Break': styles.shortBg,
  'Long Break': styles.longBg,
}

function App() {
  const [modeIndex, setModeIndex] = useState(0)
  const currentMode = modes[modeIndex]

  const handleNextMode = () => {
    setModeIndex(prevIndex => (prevIndex + 1) % modes.length)
  }

  return (
    <div className={`${styles.appWrapper} ${modeBg[currentMode]}`}>
      <CurrentMode currentMode={currentMode} />
      <Timer />
      <ControlButtons onNextMode={handleNextMode} />
    </div>
  )
}

export default App
