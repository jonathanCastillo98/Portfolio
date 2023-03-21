import React from 'react'
import "./about.css"


const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className='uil uil-award-alt about__icon'></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">1 year WebDev</span>
            </div>

            <div className="about__box">
                <i className='uil uil-briefcase-alt about__icon'></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">6+ projects</span>
            </div>

            <div className="about__box">
                <i className="uil uil-graduation-cap about__icon"></i>
                <h3 className="about__title">Degree</h3>
                <span className="about__subtitle">Computational Robotics</span>
            </div>
            <div className="about__box">
                <i className='uil uil-award about__icon' ></i>
                <h3 className="about__title">Certifications</h3>
                <span className="about__subtitle">2 certicifacions</span>
            </div>
            <div className="about__box">
                <i className='uil uil-plane-fly about__icon' ></i>
                <h3 className="about__title">Travel Docs</h3>
                <span className="about__subtitle">VISA B1/B2</span><br />
                <span className="about__subtitle">Passport</span>
            </div>
            <div className="about__box">
                <i className='uil uil-streering about__icon' ></i>
                <h3 className="about__title">Driver License</h3>
                <span className="about__subtitle">Type-A</span>
            </div>
        </div>
    )
}

export default Info