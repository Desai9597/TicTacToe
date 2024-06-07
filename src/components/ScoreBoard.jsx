import React from 'react'

export const ScoreBoard = ({ scores }) => {
    const { xScore, oScore } = scores;
  return (
    <div className="scoreboard">
        <div>Score Board</div>
        <div className="scores">
            <span>Player X : {xScore}</span>
            <span>Player O : {oScore}</span>
        </div>       
    </div>
  )
}
