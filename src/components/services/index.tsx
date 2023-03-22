import React, { useState } from 'react'
import './services.css'

const Services = () => {

    const [modalState, setModalState] = useState(0);

    const toggleTab = (i: number) => {
        setModalState(i)
    }

    const handleOnModalClose = () => {
        setModalState(0)
    }

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">Frontend <br /> Development</h3>
                    </div>

                    <span className="services__button" onClick={() => { toggleTab(1) }}>View more{" "} <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={modalState === 1 ? 'services__modal active-modal' : 'services__modal'}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={handleOnModalClose}></i>
                            <h3 className="services__modal-title">Frontend Development</h3>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">To implement clean architecture and best practices for clean, reusable and scalable coding.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">To work under Agile methodologies or any other SDLC model.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">To use vanilla JS, HTML and CSS to build apps, use React to build SPAs or any other framework or technology required (fast adaptation and learning).</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">To create full-responsive and functional apps.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">To manage global states using the context hook of React or using Redux.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">To design, develop, test and deploy new features.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">To use Jest and Coverage to ensure a good quality of the code.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Backend <br /> Development</h3>
                    </div>

                    <span className="services__button" onClick={() => { toggleTab(2) }}>View more{" "} <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={modalState === 2 ? 'services__modal active-modal' : 'services__modal'}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={handleOnModalClose}></i>
                            <h3 className="services__modal-title">Backend Development</h3>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">To implement clean architecture and best practices for clean, reusable and scalable coding.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">To work under Agile methodologies or any other SDLC model.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">To build servers with Node js or using Express as framework.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">To create Routers with endpoints, controllers and middlewares.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">To create SQL databases with PostgreSQL and Sequelize as ORM.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">To use firebase Auth to manage authentication and authorization by using tokens.</p>
                                </li>
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">To use Jest and Coverage to ensure a good quality of the code.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Services