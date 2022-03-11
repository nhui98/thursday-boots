import React from "react"

import { FaInstagram, FaFacebookSquare, FaTwitter, FaPinterestSquare, FaYoutube } from "react-icons/fa"

import "./footer.scss"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="sitemap">
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

                <ul className="sitemap-links">
                    <p>about</p>
                    <li className="sitemap-link">
                        <a href="/">out story</a>
                    </li>
                    <li className="sitemap-link">
                        <a href="/">featured press</a>
                    </li>
                    <li className="sitemap-link">
                        <a href="/">reviews</a>
                    </li>
                    <li className="sitemap-link">
                        <a href="/">location</a>
                    </li>
                    <li className="sitemap-link">
                        <a href="/">ambassadors</a>
                    </li>
                </ul>

                <ul className="sitemap-links">
                    <p>support</p>
                    <li className="sitemap-link">
                        <a href="/">faq</a>
                    </li>
                        <li className="sitemap-link">
                        <a href="/">shipping & returns</a>
                    </li>
                    <li className="sitemap-link">
                        <a href="/">shoe care</a>
                    </li>
                    <li className="sitemap-link">
                        <a href="/">terms of service</a>
                    </li>
                </ul>
            </div>

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
        </footer>
    )
}

export default Footer