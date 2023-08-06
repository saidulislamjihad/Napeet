import React from "react";
import './Blog.css'
import Heading from "./Heading";

function Blog(){
    return(
        <section className="blog-section">
            <Heading/>
            <div className="container">
                <div className="blog-item-wrapper">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="blog-item-image">
                                <img src="/src/assets/images/blog.jpg" alt="Image"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="blog-item-content">
                                <a href="#" className="blog-item-title">
                                    Three Barber Services For Your style
                                </a>
                                <p className="blog-item-text">
                                    Aliquet integer imperdiet ut platea lobortis elit praesent conubia rutrum ante vivamus posuere
                                </p>
                                <a href="#" className="custom-btn">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blog-item-wrapper">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="blog-item-image">
                                <img src="/src/assets/images/blog1.jpg" alt="Image"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="blog-item-content">
                                <a href="#" className="blog-item-title">
                                    Three Barber Services For Your style
                                </a>
                                <p className="blog-item-text">
                                    Aliquet integer imperdiet ut platea lobortis elit praesent conubia rutrum ante vivamus posuere
                                </p>
                                <a href="#" className="custom-btn">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </section>
    )
}

export default Blog