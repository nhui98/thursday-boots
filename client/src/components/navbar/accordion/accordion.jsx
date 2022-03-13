import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

const AccordionDropdown = ({ links, dropdownToggle, setdropdownToggle }) => {

    useEffect(() => {
        setdropdownToggle(prevState => {
            return {...prevState, [links.category]: false}
        })
    }, [setdropdownToggle, links.category])

    const setAccordionToggle = () => {
        setdropdownToggle(prevState => {  
            const newState = !prevState[links.category]
            let updatedState = {}

            for (let i in prevState) {
                updatedState = {...updatedState, [i]: false}
            }

            return {...updatedState, [links.category]: newState}
        })
    }

    return (
        <li className="accordion__dropdown-item">
            <div className={`accordion__dropdown-header${dropdownToggle[links.category] ? " active" : ""}`} onClick={() => setAccordionToggle()}>
                <p className="accordion__dropdown-title">{links.category}</p>
                <div className="toggle-icons">
                    <div className={`plus${dropdownToggle[links.category] ? "" : " active"}`}>
                        <AiOutlinePlus />
                    </div>
                    <div className={`minus${dropdownToggle[links.category] ? " active" : ""}`}>
                        <AiOutlineMinus />
                    </div>
                </div>
            </div>
            <ul className="dropdown__item-links">
                {
                    links.links.map((link, i) => (
                        <li className="dropdown__item-link" key={`dropdown__item-link-${i}`}>
                            <Link to={link.to}>{link.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </li>
    )
}

const Accordion = ({ title, linksList }) => {  
    const [accordionToggle, setAccordionToggle] = useState(false)

    const [dropdownToggle, setdropdownToggle] = useState({})

    return (
        <div className="accordion">
            <div className={`accordion-header${accordionToggle ? " active" : ""}`} onClick={() => setAccordionToggle(prevState => !prevState)}>
                <h2 className="accordion-title">{title}</h2>
                <div className="toggle-icons">
                    <div className={`plus${accordionToggle ? "" : " active"}`}>
                        <AiOutlinePlus />
                    </div>
                    <div className={`minus${accordionToggle ? " active" : ""}`}>
                        <AiOutlineMinus />
                    </div>
                </div>
            </div>

            <ul className="accordion__dropdown">
                {
                    linksList.map((links, i) => (
                        <AccordionDropdown links={links} key={`dropdown-item-${i}`} dropdownToggle={dropdownToggle} setdropdownToggle={setdropdownToggle} />
                    ))
                }
            </ul>
        </div>
    )
}

export default Accordion