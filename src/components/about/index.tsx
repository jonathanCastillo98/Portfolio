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
                        B.Eng. in Computational Robotics with strong Javascript fundamentals and 1 year of experience developing web apps mostly with React, NodeJS, and Express.  I am passionate and competitive, always eager to learn something new to master or earn new skills and increment the quality of my work. I like constantly challenging myself and learning from teammates, professors, masters, and whomever I work with.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About