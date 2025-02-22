import Button from './Button'

function ControlButtons({ onNextMode }) {
  return (
    <div>
      <Button />
      <Button />
      <Button onClick={onNextMode} />
    </div>
  )
}

export default ControlButtons
