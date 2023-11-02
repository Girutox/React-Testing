export function Item (
  { text, handleClick }:
  { text: string, handleClick: () => void
}) {
  return (
    <li style={{marginBottom: '10px'}}>
      {text}
      &nbsp;
      <button style={{padding: '5px', backgroundColor: 'rgb(255, 0, 0, 0.2)'}} onClick={handleClick}>
        X
      </button>
    </li>
  )
}