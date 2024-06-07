import React from 'react'

export const Tile = ({ value, onClick, playerTurn }) => {

    let hoverClass = null;

    if(value == null && playerTurn != null){
        hoverClass = `${playerTurn.toLowerCase()}-hover`;
    }

  return (
    <div className={`tile ${hoverClass}`} onClick={onClick}>{ value }</div>
  )
}
