import React from 'react'
import './home.css'

import Social from './social'
import Data from './data'
import Scrolldown from './scrolldown'

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social />

                    <div className="home__img"></div>

                    <Data />
                </div>

                <Scrolldown />
            </div>
        </section>
    )
}

export default Home