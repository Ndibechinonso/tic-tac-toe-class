import { useEffect, useLayoutEffect, useState } from "react"
import Square from "./Square"

const Board = () =>{

    useEffect(()=>{
        console.log("load");
        
        return ()=>{
            console.log("return");       
        }
    }, [])
    useLayoutEffect(()=>{
        console.log("layout");
        
    }, [])
const [squares, setSquares] = useState(Array(9).fill(null));
const [isNextPlayerX, setIsNextPlayerX] = useState(true)

const winner = calculateWinner(squares)
      const handleClick = (index: number) =>{
        if(squares[index] || winner) return
        const newSquares = [...squares]
        if(isNextPlayerX){
            newSquares[index] = "X";
        }else{
            newSquares[index] = "O";   
        }
        setSquares(newSquares)
        setIsNextPlayerX(!isNextPlayerX)
    }
let display;
if(winner){
    display = `Winner: ${winner}`
}else{
display = `Next Player: ${isNextPlayerX ? "X" : "O"}`
}
  
    // console.log(calculateWinner(squares), "winner");

    function calculateWinner (squares: string[]){
       
        const lines = [[0,1,2], [0,3,6],[0,4,8],[2,5,8],[1,4,7], [2,4,6],[3,4,5],[6,7,8]]
        for(let i = 0; i < lines.length - 1; i++){
            const [a,b,c] = lines[i]  
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
                return squares[b]
            }
        }
        return null
    }


    return(
        <>
          <div>{display}</div>
        <div className="board">
          
            <div className="board_row">
                <Square text={squares[0]} onSquareClick={() => handleClick(0)}/>
                <Square text={squares[1]} onSquareClick={() => handleClick(1)}/>
                <Square text={squares[2]} onSquareClick={() => handleClick(2)}/>
            </div>
            <div className="board_row">
                <Square text={squares[3]}onSquareClick={() => handleClick(3)} />
                <Square text={squares[4]} onSquareClick={() => handleClick(4)}/>
                <Square text={squares[5]} onSquareClick={() => handleClick(5)}/>
            </div>
            <div className="board_row">
                <Square text={squares[6]} onSquareClick={() => handleClick(6)}/>
                <Square text={squares[7]} onSquareClick={() => handleClick(7)}/>
                <Square text={squares[8]} onSquareClick={() => handleClick(8)}/>
            </div>

        </div>
        </>
    )
}

export default Board