import React from "react"
import Button from "../../components/button/button"

import "./home.scss"

const Home = () => {
    return (
        <main className="home">

            <section className="slide">
                <figure className="slide__one">
                    <img src="/images/home1.webp" alt="slide 1" />
                    <figcaption className="slide__one-card">
                        <h1>
                            highest quality.
                            <br />
                            honest prices.
                        </h1>
                        <p>handcrafted with integrity</p>
                        <div className="call-to-action">
                            <Button text="shop men" />
                            <Button text="shop women" />
                        </div>
                    </figcaption>
                </figure>
            </section>

        </main>
    )
}

export default Home