import React from 'react'
import { Link } from 'react-router-dom'
import './player.css'
const Player = ({player}) => {
  return (
    <Link to={`/${player.Id}`} >
    <div >
        <h3 className="name">{player.PFName}</h3>
      <h5 className="skill">Skill: {player.SkillDesc}</h5>
      <h3 className="value">Value: ${player.Value}</h3>
      <h4>Upcomming matches</h4>
      {player.UpComingMatchesList.map((match) => (
          <p key={match.VsCCode}>
          {match.CCode} vs {match.VsCCode} <br />
          {match.MDate}
        </p>
      ))}
    </div>
      </Link>
  )
}

export default Player