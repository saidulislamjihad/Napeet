import React from "react";
import './Home.css'

function Home(){
    return(
        <section className="home-section">
            <div className="home-content-outer">
                <img className="home-content-image" src="/src/assets/images/logo-1.webp" alt="Logo" />
                <h1 className="home-content-title">
                    HAIRCUT & SHAVES
                </h1>
                <p className="home-content-text">
                    Enjoy & relax in a luxury barber shop environment Top Cut Hair Style with Fancy Tradition
                </p>
                <a href="#" className="home-content-btn custom-btn">
                    Book Now
                </a>
            </div>
        </section>
    )
}

export default Home