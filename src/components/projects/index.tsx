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
                <TabPanel value='Industrial'>Panel 2</TabPanel>
                <TabPanel value='University'>Panel 3</TabPanel>
            </TabContext>
        </section>
    )
}

export default Projects