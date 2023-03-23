import React from 'react'
import './skills.css'

import workUnderPressureI from '../../assets//SoftSkillsIcons/workUnderPressure.png'
import detailOrientedI from '../../assets//SoftSkillsIcons/detailOriented.png'
import criticalThinkingI from '../../assets//SoftSkillsIcons/criticalThinking.png'
import problemSolvingI from '../../assets//SoftSkillsIcons/problemSolving.png'
import goodTeamPlayerI from '../../assets//SoftSkillsIcons/goodTeamPlayer.png'
import timeManagementI from '../../assets//SoftSkillsIcons/timeManagement.png'



const Softskills = () => {
  return (
    <div className="softskills__container container grid">
      <div className="softskills__card">
        <img src={workUnderPressureI} alt="" className="softskills__img" />
        <h3 className="softskills__title">Ability to work <br /> under pressure</h3>
      </div>
      <div className="softskills__card">
        <img src={detailOrientedI} alt="" className="softskills__img" />
        <h3 className="softskills__title">Detail-Oriented</h3>
      </div>
      <div className="softskills__card">
        <img src={criticalThinkingI} alt="" className="softskills__img" />
        <h3 className="softskills__title">Critical Thinking</h3>
      </div>
      <div className="softskills__card">
        <img src={problemSolvingI} alt="" className="softskills__img" />
        <h3 className="softskills__title">Problem-Solving<br /></h3>
      </div>
      <div className="softskills__card">
        <img src={goodTeamPlayerI} alt="" className="softskills__img" />
        <h3 className="softskills__title">Good Team Player</h3>
      </div>
      <div className="softskills__card">
        <img src={timeManagementI} alt="" className="softskills__img" />
        <h3 className="softskills__title">Time Management</h3>
      </div>
    </div>
  )
}

export default Softskills