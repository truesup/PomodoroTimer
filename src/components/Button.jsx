function Button({ icon, onClick, className = '' }) {
  return (
    <button className={className} onClick={onClick}>
      <img src={icon} alt="Button Icon" />
    </button>
  )
}

export default Button
