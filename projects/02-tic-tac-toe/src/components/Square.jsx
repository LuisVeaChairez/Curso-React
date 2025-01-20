export const Square = ({ index, children, isSelected, updateBoard }) => {
  const className = isSelected ? 'square is-selected' : 'square'
  
  const handleClick = () => {
    updateBoard(index)
  }

  return(
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}