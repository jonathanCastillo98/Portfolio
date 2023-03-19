import React from 'react'
import './scrollup.css'

const Scrollup = () => {
    window.addEventListener("scroll", () => {
        const scrollUp = document.querySelector(".scrollup__div");
        const foot = document.querySelector(".footer")
        const pageHeight = document.documentElement.scrollHeight;
        const footClientHeight = foot?.clientHeight;
        if (footClientHeight) {
            if ((window.scrollY + footClientHeight) >= (pageHeight - footClientHeight)) {
                scrollUp?.classList.add("show-scroll")
            }
            else {
                scrollUp?.classList.remove("show-scroll")
            }
        }


    })
    return (
        <div className="scrollup__div">
            <a href="#" className="scrollup">
                <i className="uil uil-arrow-up scrollup__icon"></i>
            </a>
        </div>
    )
}

export default Scrollup