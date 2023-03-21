import React from 'react'
import './qualification.css'
import { useState } from 'react'

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index: number) => {
        setToggleState(index)
    }

    return (
        <section className="qualification section" id='qualifications'>
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personel journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>
                    <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Javascript WebDev</h3>
                                <span className="qualification__subtitle">Instituto Tecnológico Ksquare</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">2022 - 2023</i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Computational Robotics Engineering</h3>
                                <span className="qualification__subtitle">Universidad Politécnica de Yucatán</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">2016 - 2020</i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Javascript Developer</h3>
                                <span className="qualification__subtitle">Instituto Tecnológico Ksquare</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">2022 - 2023</i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Production Engineer</h3>
                                <span className="qualification__subtitle">Uchiyama Manufacturing de Yucatán</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">2020 - 2022</i>
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Industrial Robot Programming</h3>
                                <span className="qualification__subtitle">Universidad Politécnica de Yucatán - Internship</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">2020 - 2020</i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Omni-directional Robot with Artificial Vision Programming</h3>
                                <span className="qualification__subtitle">Universidad Politécnica de Yucatán - Big Project</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">2019 - 2020</i>
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Maintenance of heavy machinery</h3>
                                <span className="qualification__subtitle">Seal and Metal products of Latin America - Internship</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">2018 - 2018</i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Internet of Things with Nodejs and Arduino</h3>
                                <span className="qualification__subtitle"> Andromie Rootics - Internship</span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt">2017 - 2017</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Qualification