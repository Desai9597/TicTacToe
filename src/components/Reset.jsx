import React from 'react'
import GameState from './GameState'

export const Reset = ({ gameState, onReset}) => {

   /* if(gameState === GameState.inProgress)
        return;*/

  return (
    <button className="reset-button" 
            onClick={onReset}
    >Play Again</button>
  )
}
