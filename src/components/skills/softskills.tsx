import React from 'react'
import './skills.css'

import workUnderPressureI from '../../assets/workUnderPressure.png'
import detailOrientedI from '../../assets/detailOriented.png'
import criticalThinkingI from '../../assets/criticalThinking.png'
import problemSolvingI from '../../assets/problemSolving.png'
import goodTeamPlayerI from '../../assets/goodTeamPlayer.png'
import timeManagementI from '../../assets/timeManagement.png'



const Softskills = () => {
  return (
    <div className="softskills__container container grid">
      <div className="softskills__card">
        <img src={workUnderPressureI} alt="" className="softskills__img" />
        <h3 className="softskills__title">Ability to Work <br /> under Pressure</h3>
      </div>
      <div className="softskills__card">
        <img src={detailOrientedI} alt="" className="softskills__img" />
        <h3 className="softskills__title">Detail-oriented</h3>
      </div>
      <div className="softskills__card">
        <img src={criticalThinkingI} alt="" className="softskills__img" />
        <h3 className="softskills__title">Critical Thinking</h3>
      </div>
      <div className="softskills__card">
        <img src={problemSolvingI} alt="" className="softskills__img" />
        <h3 className="softskills__title">Problem-solving<br /></h3>
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