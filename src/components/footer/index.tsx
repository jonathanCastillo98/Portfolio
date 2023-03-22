import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Castillo</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.facebook.com/joni.velazquez.12382" className="footer__social-link" target='_blank'>
                        <i className="bx bxl-facebook"></i>
                    </a>

                    <a href="https://www.instagram.com/joni_v98/" className="footer__social-link" target='_blank'>
                        <i className="bx bxl-instagram"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/jonathan-castillo-551b0721b/" className="footer__social-link" target='_blank'>
                        <i className="bx bxl-linkedin"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; Jonathan Castillo. All rigths reserved</span>
            </div>
        </footer>
    )
}

export default Footer