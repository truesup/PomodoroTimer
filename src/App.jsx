import { ModeProvider } from './contexts/ModeProvider'
import Header from './components/Header'
import TimerDisplay from './components/TimerDisplay'
import ControlButtons from './components/ControlButtons'
import MainWrapper from './components/MainWrapper'

const App = () => {
  return (
    <ModeProvider>
      <MainWrapper>
        <Header />
        <TimerDisplay />
        <ControlButtons />
      </MainWrapper>
    </ModeProvider>
  )
}

export default App
