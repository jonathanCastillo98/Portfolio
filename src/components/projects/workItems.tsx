import React, { useState } from 'react'
import './projects.css'

type itemT = {
    id: number;
    image: string;
    title: string;
    category: string;
    descriptions: any[]
    isDemo: boolean;
    linkDemo: string;
    techIcons: any[];
    descriptionRole: string;
}

type WorkItemsT = {
    item: itemT
}

const WorkItems = ({ item }: WorkItemsT) => {

    const [modalState, setModalState] = useState(0);

    const toggleTab = (i: number) => {
        setModalState(i)
    }

    const handleOnModalClose = () => {
        setModalState(0)
    }

    const descriptionsList = item.descriptions.map((description) => {
        return (
            <li className="work__modal-service" key={description}>
                <i className="uil uil-check-circle work__modal-icon"></i>
                <p className="work__modal-info">{description.description}</p>
            </li>
        )
    })

    const techIconsList = item.techIcons.map((icon) => {
        return (
            <div className="tech-icon" key={icon.id}>
                <img src={icon.icon} alt={icon.icon} />
            </div>
        )
    })


    return (
        <div className="work__card" key={item.id}>
            <img src={item.image} alt={item.image} className="work__img" />
            <h3 className="work__title">{item.title}</h3>
            <div className="work__card-divider">
                <span className="work__button work__button" onClick={() => { toggleTab(item.id) }}>View more{" "} <i className="uil uil-arrow-right work__button-icon"></i></span>
                <div className={modalState === item.id ? 'work__modal active-modal' : 'work__modal'}>
                    <div className="work__modal-content">
                        <i className="uil uil-times work__modal-close" onClick={handleOnModalClose}></i>
                        <h3 className="work__modal-title">{item.title}</h3>
                        <p className="work__modal-description">{item.descriptionRole}</p>
                        <div className="work__modal-work-content">
                            <ul className="work__modal-work grid">
                                {descriptionsList}
                            </ul>
                            <div className="tech-icons-wrapper">
                                <h3 className="tech-icons-title">Technologies used</h3>
                                <div className="tech-icons-container">
                                    {techIconsList}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {item.isDemo === true ? <a href={item.linkDemo} className="work__button">Demo <i className="bx bx-link-external work__button-icon"></i></a> : ""}
            </div>
        </div>
    )
}

export default WorkItems