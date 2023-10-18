
interface SquareProps{
    text: string;
    onSquareClick: () => void
}
const Square = ({text, onSquareClick}: SquareProps) =>{
  
    return(
        <button onClick={onSquareClick}>
            {text}
        </button>
    )
}

export default Square