import React from 'react'
import './certifications.css'

import salesforceCert from '../../assets/Certifications/SalesforceIMG.png'
import itkCer from '../../assets/Certifications/ITKIMG.png'

const Certifications = () => {
    return (
        <section className="certifications section" id="certifications">
            <h2 className="section__title">Certifications</h2>
            <span className="section__subtitle"></span>

            <div className="certifications__container container grid">
                <div className="cert__box">
                    <img src={salesforceCert} alt="" className='cert__img' />
                </div>
                <div className="cert__box">
                    <img src={itkCer} alt="" className='cert__img' />
                </div>
            </div>
        </section>
    )
}

export default Certifications