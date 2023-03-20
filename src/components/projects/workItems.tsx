import React from 'react'
import './projects.css'

type itemT = {
    id: number;
    image: string;
    title: string;
    category: string;
    isDemo: boolean;
    linkDemo: string;
}

type WorkItemsT = {
    item: itemT
}

const WorkItems = ({ item }: WorkItemsT) => {
    return (
        <div className="work__card" key={item.id}>
            <img src={item.image} alt={item.image} className="work__img" />
            <h3 className="work__title">{item.title}</h3>
            <div className="work__card-divider">
                <span className="services__button work__button">View more{" "} <i className="uil uil-arrow-right work__button-icon"></i></span>
                {item.isDemo === true ? <a href={item.linkDemo} className="work__button">Demo <i className="bx bx-link-external work__button-icon"></i></a> : ""}
            </div>
        </div>
    )
}

export default WorkItems