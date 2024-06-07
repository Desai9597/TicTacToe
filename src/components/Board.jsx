import { Strike } from "./Strike";
import { Tile } from "./Tile";

function Board( {tiles , onTileClick, playerTurn, strikeClass }){
    return (
        <div className="board">
            {
                tiles.map((value, index) => {
                    return <Tile value={value} 
                                playerTurn={playerTurn}                                
                                onClick={() => onTileClick(index)} key={index}/>;
                })
            }           
           
            <Strike strikeClass={strikeClass}/>          
        </div>
    );
}

export default Board;