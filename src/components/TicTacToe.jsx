import React, { useState, useEffect } from 'react'
import Board from './Board'
import GameState from './GameState';
import { GameOver } from './GameOver';
import { Reset } from './Reset';
import { ScoreBoard } from './ScoreBoard';

const PLAYER_X = "X";
const PLAYER_O = "O";

const winningCombinations = [
  //Rows
  { combo: [0,1,2], strikeClass: "strike-row-1"},
  { combo: [3,4,5], strikeClass: "strike-row-2"},
  { combo: [6,7,8], strikeClass: "strike-row-3"},

  //Columns
  { combo: [0,3,6], strikeClass: "strike-column-1"},
  { combo: [1,4,7], strikeClass: "strike-column-2"},
  { combo: [2,5,8], strikeClass: "strike-column-3"},

  //diagonal
  { combo: [0,4,8], strikeClass: "strike-diagonal-1"},
  { combo: [2,4,6], strikeClass: "strike-diagonal-2"},
]

function checkWinner(tiles, setStrikeClass, setGameState, scores, setScores) {
    for( const winningCombination of winningCombinations){
      const { combo , strikeClass} = winningCombination;
      const tileValue1 = tiles[combo[0]];
      const tileValue2 = tiles[combo[1]];
      const tileValue3 = tiles[combo[2]];

      if(tileValue1 !=null && tileValue1 === tileValue2 && tileValue1 === tileValue3){
        setStrikeClass(strikeClass);
        if(tileValue1 === PLAYER_X){
          setGameState(GameState.playerXWins);
          let { xScore } = scores;
          xScore+=1;
          setScores({...scores, xScore});
        }
        else{
          setGameState(GameState.playerOWins);
          let { oScore } = scores;
          oScore += 1;
          setScores({...scores, oScore});
        }
        return;
      }
    }

    //check if not returned from above if condition but all tiles are filled
    const areAllTilesFilledIn = tiles.every((tile) => tile !== null);
    if(areAllTilesFilledIn){
      setGameState(GameState.draw);
    }
}

export const TicTacToe = () => {

  const [tiles, setTiles] = React.useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = React.useState(PLAYER_X);
  const [strikeClass, setStrikeClass] = React.useState();
  const [gameState, setGameState] = useState(GameState.inProgress);
  const [scores, setScores] = useState({xScore: 0, oScore: 0});

  const handleTileClick = (index) => {
    //if game is over, dont allow futher clicks
    if(gameState !== GameState.inProgress){
      return;
    }

    //if a tile is clicked once, dont allow second time click
    if(tiles[index] !== null){
      return; 
    }

    const copyTiles = [...tiles];
    copyTiles[index] = playerTurn;
    setTiles(copyTiles);

    if(playerTurn === PLAYER_X){
      setPlayerTurn(PLAYER_O);
    }
    else{
      setPlayerTurn(PLAYER_X);
    }
  };

  function handleReset(){
    setGameState(GameState.inProgress);
    setTiles(Array(9).fill(null));
    setPlayerTurn(PLAYER_X);
    setStrikeClass(null);
  }

  useEffect(() => {
    checkWinner(tiles, setStrikeClass, setGameState, scores, setScores);
  }, [tiles] )
  
  return (
    <div className="tictactoe">
    <h1>Tic Tac Toe</h1>
    <ScoreBoard scores={scores} />
    <Board  
        tiles={tiles} 
        playerTurn={playerTurn}
        strikeClass={strikeClass}
        onTileClick={handleTileClick} />
   
    
    <Reset gameState={gameState} onReset={handleReset} />
    <GameOver gameState={gameState} />
    </div>
  )
}
