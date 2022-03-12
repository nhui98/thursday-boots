import React from "react"

import { FaInstagram, FaFacebookSquare, FaTwitter, FaPinterestSquare, FaYoutube } from "react-icons/fa"

import "./footer.scss"

const Newsletter = () => {
    return (
        <div className="newsletter">
            <form className="signup-box">
                <label htmlFor="signup-input">Register for early access & exclusive deals</label>
                <div className="signup">
                    <input className="signup-input" id="signup-input" placeholder="email@example.com"></input>
                    <button type="submit" className="signup-btn">join the team</button>
                </div>
            </form>
            <ul className="social-links">
                <li className="social-link"><FaInstagram /></li>
                <li className="social-link"><FaFacebookSquare /></li>
                <li className="social-link"><FaTwitter /></li>
                <li className="social-link"><FaPinterestSquare /></li>
                <li className="social-link"><FaYoutube /></li>
            </ul>
        </div>
    )
}

const SitemapLinks = () => {
    return (
        <ul className="sitemap-links">
            <p>shop</p>
            <li className="sitemap-link">
                <a href="/">men's boots</a>
            </li>
            <li className="sitemap-link">
                <a href="/">women's boots</a>
            </li>
            <li className="sitemap-link">
                <a href="/">men's sneakers</a>
            </li>
            <li className="sitemap-link">
                <a href="/">men's shoes</a>
            </li>
            <li className="sitemap-link">
                <a href="/">accessories</a>
            </li>
        </ul>
    )
}

const Sitemap = () => {
    return (
        <div className="sitemap">
            <SitemapLinks />
            <SitemapLinks />
            <SitemapLinks />
        </div>
    )
}

const Footer = () => {
    return (
        <footer className="footer">
            <Sitemap />
            <Newsletter />
        </footer>
    )
}

export default Footer