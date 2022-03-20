import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FaInstagram, FaFacebookSquare, FaTwitter, FaPinterestSquare, FaYoutube } from "react-icons/fa"

import "./footer.scss"

import { SitemapLinks as data} from "../../data/data"

const Newsletter = () => {
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    const formHandler = e => {
        e.preventDefault()
        navigate(`/register${email ? `?${email}` : ""}`)
    }

    return (
        <div className="newsletter">
            <form className="signup-box" onSubmit={e => formHandler(e)}>
                <label htmlFor="signup-input">Register for early access & exclusive deals</label>
                <div className="signup">
                    <input type="email" className="signup-input" id="signup-input" placeholder="email@example.com" onChange={e => setEmail(e.target.value)} />
                    <button type="submit" className="button signup-btn">join the team</button>
                </div>
            </form>
            <ul className="social-links">
                <li className="social-link">
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagram /></a>
                </li>
                <li className="social-link">
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaFacebookSquare /></a>
                </li>
                <li className="social-link">
                    <a href="https://www.twitter.com/" target="_blank" rel="noreferrer"><FaTwitter /></a>
                </li>
                <li className="social-link">
                    <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer"><FaPinterestSquare /></a>
                </li>
                <li className="social-link">
                    <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><FaYoutube /></a>
                </li>
            </ul>
        </div>
    )
}

const SitemapLinks = ({ links }) => {
    return (
        <ul className="sitemap-links">
            <p>{links.category}</p>
            {
                links.links.map((link, i) => {
                    return (
                        <li className="sitemap-link" key={`sitemaplink-${i}`}>
                            <Link to={link.to}>{link.name}</Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}


const Footer = () => {
    return (
        <footer className="footer">
            <div className="sitemap">
                {
                    data.map((links, i) => {
                        return (
                            <SitemapLinks key={`sitemaplinks-${i}`} links={links} />
                        )
                    })
                }
            </div>
            <Newsletter />
        </footer>
    )
}

export default Footer