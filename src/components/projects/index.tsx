import React, { useState } from 'react'
import './projects.css'

import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab';

import { projectsData } from './data';
import WorkItems from './workItems';

const Projects = () => {

    const [projectCategory, setProjectCategory] = useState('WebDev');

    const handleOnProjectCategoryChange = (e: React.SyntheticEvent, newValue: string) => {
        setProjectCategory(newValue)
    }

    return (
        <section className="project section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">{projectCategory} Work</span>

            <TabContext value={projectCategory}>
                <Box sx={{ borderBotton: 1, borderColor: 'divider' }}>
                    <TabList aria-label='Skills tab' onChange={handleOnProjectCategoryChange} textColor='secondary' indicatorColor='secondary' centered>
                        <Tab label='WebDev' value="WebDev" />
                        <Tab label='Industrial' value="Industrial" />
                        <Tab label='University' value="University" />
                    </TabList>
                </Box>
                <TabPanel value='WebDev'>
                    <div className="work__container container grid">
                        {projectsData.map((item) => {
                            return <WorkItems item={item} key={item.id} />
                        })}
                    </div>
                </TabPanel>
                <TabPanel value='Industrial'>
                    <div className="skills__content">
                        <h3 className="skills__title">Head of the Material Processing Area</h3>

                        <div className="industrial__box">

                            <p className='uchi__description'>I worked at Uchiyama Manufacturing de Yucatán (a Japanese enterprise) from 2020 - 2022, where I was part of the initial team of the plant conformed of almost only 10 people. During the first months, I spent time learning about the processes that were going to be part of the production process, then I was assigned as the Processing Material Head, where my main goal was to make everything as perfect as possible in that area in order for the plant to start the production process as fast as possible.
                                <br /> <br /> After almost a year of learning about my job position and a new culture, I was assigned people (Engineers and Operators) to train them in order to start the production process, the thing that happened a few months later without any problem.
                            </p>
                            <div className="uchi__tasks">
                                <div className="list">
                                    <h3 className="tasks__title">Training process</h3>
                                    <ul className="uchi__tasks-list">
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p>Deeply learning about audits (IATF 16949, ISO 14001, ISO 9001).</p>

                                        </li>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p>Deeply learning of the whole process of my corresponding area by reading manuals, work instructions, and work standards from other plants.</p>

                                        </li>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p>Learn about very important topics like Just In Time, Kanban, Jidoka, 5s, Lean Manufacturing, Kaizen, and Six-sigma.</p>

                                        </li>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p>Learn important soft skills to correctly manage and deal with people, how to be a good leader, how to be a really good team-player, etc. </p>

                                        </li>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p>Enjoy learning about a new culture, and what are the expectations of me as a professional and as a person.</p>

                                        </li>
                                    </ul>
                                </div>
                                <div className="list">
                                    <h3 className="tasks__title">My Tasks</h3>
                                    <ul className='uchi__tasks-list'>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p>To be part of audits (Internals and Externals), and sometimes act as a Internal Auditor.</p>

                                        </li>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p>To be part of almost all of the important meetings with the President and Managers to discuss and make decisions as a team. </p>

                                        </li>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p>To be a leader, a head of people. </p>

                                        </li>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p>To constantly solve problems and make decisions quickly and effectively. </p>

                                        </li>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p>To master knowledge about all machines in my area by having meetings with Japanese people despite the language barrier (sometimes Japanese people didn't know English, so I decided to learn a little bit of Japanese). </p>

                                        </li>
                                        <li className="services__modal-service">
                                            <i className="uil uil-check-circle services__modal-icon"></i>
                                            <p>To create manuals, work instructions of the machines, work standarts by making calculations through formulas and confidential data. </p>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value='University'>Panel 3</TabPanel>
            </TabContext>
        </section >
    )
}

export default Projects