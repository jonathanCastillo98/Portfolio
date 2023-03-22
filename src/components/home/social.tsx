import React from 'react'
import './home.css'

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.instagram.com/joni_v98/" className="home__social-icon" target='_blank'>
                <i className="uil uil-instagram"></i>
            </a>
            <a href="https://www.facebook.com/joni.velazquez.12382" className="home__social-icon" target='_blank'>
                <i className="uil uil-facebook-f"></i>
            </a>
            <a href="https://github.com/jonathanCastillo98" className="home__social-icon" target='_blank'>
                <i className="uil uil-github-alt"></i>
            </a>

        </div>
    )
}

export default Social