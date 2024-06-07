import React from 'react'
import GameState from './GameState'

export const GameOver = ({ gameState}) => {
 switch(gameState){
    case GameState.inProgress:
        return <></>;
    case GameState.playerOWins:
        return <div className="game-over">Player O Wins</div>;
    case GameState.playerXWins:
        return <div className="game-over">Player X Wins</div>;
    case GameState.draw:
        return <div className="game-over">Draw</div>;
    default:
        return <></>;
 }
}
