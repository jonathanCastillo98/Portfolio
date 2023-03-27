import React, { useState } from 'react'
import './skills.css'

import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab';

import Frontend from './frontend'
import Backend from './backend'
import Aditional from './aditional'
import Softskills from './softskills';
import Robotics from './robotics';


const Skills = () => {
    const [skillValue, setSkillValue] = useState('WebDev');

    const handleOnSkillsChange = (e: React.SyntheticEvent, newValue: string) => {
        setSkillValue(newValue)
    }
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My {skillValue} skills</span>

            <TabContext value={skillValue}>
                <Box sx={{ borderBotton: 1, borderColor: 'divider' }}>
                    <TabList aria-label='Skills tab' onChange={handleOnSkillsChange} textColor='secondary' indicatorColor='secondary' centered>
                        <Tab label='WebDev' value="WebDev" />
                        <Tab label='Soft-skills' value="Soft" />
                        <Tab label='Robotics' value="Robotics" />
                    </TabList>
                </Box>
                <TabPanel value='WebDev'>
                    <div className="skills__container container grid">
                        <Frontend />
                        <Backend />
                        <Aditional />
                    </div>
                </TabPanel>
                <TabPanel value='Soft'>
                    <Softskills />
                </TabPanel>
                <TabPanel value='Robotics'>
                    <Robotics />
                </TabPanel>
            </TabContext>
        </section>
    )
}

export default Skills