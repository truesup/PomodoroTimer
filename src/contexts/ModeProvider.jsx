import { useState } from 'react'
import { ModeContext } from './ModeContext'

const modesQueue = [
  'Focus',
  'Short Break',
  'Focus',
  'Short Break',
  'Focus',
  'Short Break',
  'Focus',
  'Short Break',
  'Long Break',
]

export const ModeProvider = ({ children }) => {
  const [modeIndex, setModeIndex] = useState(0)
  const currentMode = modesQueue[modeIndex]

  const handleSwitchMode = () => {
    setModeIndex(prevIndex => (prevIndex + 1) % modesQueue.length)
  }

  return (
    <ModeContext.Provider value={{ currentMode, handleSwitchMode }}>
      {children}
    </ModeContext.Provider>
  )
}
