import React from "react"
import { Link } from "react-router-dom"

import { homeCategoryGridData as data} from "../../../data/data"

const CategoryGrid = () => {
    return (
        <section className="categorygrid">
            <div className="grid">
                <Link to={data[0].to} className="grid__item one">
                    <img src={data[0].src} alt={data[0].name} />
                    <h2 className="grid__item-title">{data[0].text}</h2>
                </Link>
                <Link to={data[1].to} className="grid__item two">
                    <img src={data[1].src} alt={data[1 ].name} />
                    <h2 className="grid__item-title">{data[1].text}</h2>
                </Link>
                <Link to={data[2].to} className="grid__item three">
                    <img src={data[2].src} alt={data[2].name} />
                    <p className="grid__item-title">{data[2].text}</p>
                </Link>
                <Link to={data[3].to} className="grid__item four">
                    <img src={data[3].src} alt={data[3].name} />
                    <p className="grid__item-title">{data[3].text}</p>   
                </Link>
                <Link to={data[4].to} className="grid__item five">
                    <img src={data[4].src} alt={data[4].name} />
                    <p className="grid__item-title">{data[4].text}</p>             
                </Link>
                <Link to={data[5].to} className="grid__item six">
                    <img src={data[5].src} alt={data[5].name} />
                    <p className="grid__item-title">{data[5].text}</p>
                </Link>
                <Link to={data[6].to} className="grid__item seven">
                    <img src={data[6].src} alt={data[6].name} />
                    <p className="grid__item-title">{data[6].text}</p>
                </Link>
            </div>
        </section>
    )
}

export default CategoryGrid