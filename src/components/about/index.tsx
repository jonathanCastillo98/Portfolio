import React from 'react'
import './about.css'
import AboutImg from '../../assets/profile.jpeg';
import Info from './info';

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About me</h2>
            <span className="section__subtitle">My introduction</span>

            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img" />

                <div className="about__data">
                    <Info />

                    <p className="about__description">
                        B.Eng. in Computational Robotics with 1 year of experience developing web apps mostly with Javascript (React, NodeJS, and Express). I am passionate and competitive, always eager to learn new things from challenges, self-learning, or being part of a team. <br /> <br />
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About