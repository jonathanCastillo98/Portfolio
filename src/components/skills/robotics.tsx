import React from 'react'

import pythonI from '../../assets/RoboticsSkillsIcons/python.svg'
import tensorFlowI from '../../assets/RoboticsSkillsIcons/tensorFlow.svg'
import matlabI from '../../assets/RoboticsSkillsIcons/matlab.svg'
import anacondaI from '../../assets/RoboticsSkillsIcons/anaconda.svg'
import linuxI from '../../assets/RoboticsSkillsIcons/linux.svg'
import cPlusPlusI from '../../assets/RoboticsSkillsIcons/CPlusPlus.svg'
import solidWorksI from '../../assets/RoboticsSkillsIcons/solidWorks.svg'
import inventorI from '../../assets/RoboticsSkillsIcons/inventor.png'
import webotsI from '../../assets/RoboticsSkillsIcons/webots.png'
import arduinoI from '../../assets/RoboticsSkillsIcons/arduino.svg'
import psocI from '../../assets/RoboticsSkillsIcons/psoc.png'

const Robotics = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Computational Robotics</h3>

            <div className="skills__box-robotics">

                <div className="skills__group-robotics">
                    <div className="skills__data-robotics">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Machine / Depth Learning</h3>
                            <div className="roboticsSkills">

                                <div className="roboticSkill">
                                    <span>Python</span>
                                    <img src={pythonI} alt={pythonI} />
                                </div>
                                <div className="roboticSkill">
                                    <span>TensorFlow</span>
                                    <img src={tensorFlowI} alt={tensorFlowI} />
                                </div>
                                <div className="roboticSkill">
                                    <span>Matlab</span>
                                    <img src={matlabI} alt={matlabI} />
                                </div>

                                <div className="roboticSkill">
                                    <span>Anaconda</span>
                                    <img src={anacondaI} alt={anacondaI} />
                                </div>
                                <div className="roboticSkill">
                                    <span>Linux</span>
                                    <img src={linuxI} alt={linuxI} />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="skills__data-robotics">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Neural Network</h3>
                            <div className="roboticsSkills">
                                <div className="roboticSkill">
                                    <span>Python</span>
                                    <img src={pythonI} alt={pythonI} />
                                </div>
                                <div className="roboticSkill">
                                    <span>TensorFlow</span>
                                    <img src={tensorFlowI} alt={tensorFlowI} />
                                </div>
                                <div className="roboticSkill">
                                    <span>Matlab</span>
                                    <img src={matlabI} alt={matlabI} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="skills__data-robotics">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Robot Programming</h3>
                            <div className="roboticsSkills">
                                <div className="roboticSkill">
                                    <span>Python</span>
                                    <img src={pythonI} alt={pythonI} />
                                </div>
                                <div className="roboticSkill">
                                    <span>C++</span>
                                    <img src={cPlusPlusI} alt={cPlusPlusI} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="skills__group-robotics">
                    <div className="skills__data-robotics">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">PLC Programming</h3>
                            <div className="roboticsSkills">
                                <div className="roboticSkill">
                                    <span>C++</span>
                                    <img src={cPlusPlusI} alt={cPlusPlusI} />
                                </div>
                                <div className="roboticSkill">
                                    <span>TiaPortal</span>
                                    <img src="" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="skills__data-robotics">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">3D Modeling</h3>
                            <div className="roboticsSkills">
                                <div className="roboticSkill">
                                    <span>Webots</span>
                                    <img src={webotsI} alt={webotsI} />
                                </div>
                                <div className="roboticSkill">
                                    <span>SolidWorks</span>
                                    <img src={solidWorksI} alt={solidWorksI} />
                                </div>
                                <div className="roboticSkill">
                                    <span>Inventor</span>
                                    <img src={inventorI} alt={inventorI} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="skills__data-robotics">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Artificial Vision</h3>
                            <div className="roboticsSkills">
                                <div className="roboticSkill">
                                    <span>Python</span>
                                    <img src={pythonI} alt={pythonI} />
                                </div>
                                <div className="roboticSkill">
                                    <span>TensorFlow</span>
                                    <img src={tensorFlowI} alt={tensorFlowI} />
                                </div>
                                <div className="roboticSkill">
                                    <span>Matlab</span>
                                    <img src={matlabI} alt={matlabI} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="skills__group-robotics">
                    <div className="skills__data-robotics">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name">Microcontroller Programming</h3>
                            <div className="roboticsSkills">
                                <div className="roboticSkill">
                                    <span>Cypress PSoC</span>
                                    <img src={psocI} alt={psocI} />
                                </div>
                                <div className="roboticSkill">
                                    <span>C++</span>
                                    <img src={cPlusPlusI} alt={cPlusPlusI} />
                                </div>
                                <div className="roboticSkill">
                                    <span>Arduino</span>
                                    <img src={arduinoI} alt={arduinoI} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Robotics