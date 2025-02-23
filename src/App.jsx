import { useState } from 'react'
import CurrentMode from './components/CurrentMode'
import Timer from './components/Timer'
import ControlButtons from './components/ControlButtons'
import { modes, modeBg } from './constants/modeStyles'
import styles from './App.module.css'

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
      <ControlButtons currentMode={currentMode} onNextMode={handleNextMode} />
    </div>
  )
}

export default App
