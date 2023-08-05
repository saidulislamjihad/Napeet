import React from "react";
import './Services.css'
import Heading from "./Heading";

function Services(){
    return(
        <section className="service-section">
            <div className="service-left-image">
                <img src="/src/assets/images/service-left-image-1.webp" />
            </div>
            <div className="service-right-image">
                <img src="/src/assets/images/service-right-image-1.webp" />
            </div>
            <Heading/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item-outer">
                            <img src="/src/assets/images/salon.png" className="service-item-icon" alt="Icon" />
                            <h3 className="service-item-title">
                                Hair Cutting Style
                            </h3>
                            <p className="service-item-text">
                                Lorem Ipsum is the simply dummy text of the printing and typesetting industry. It has been industry best dummy text ever.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item-outer">
                            <img src="/src/assets/images/shampoo.png" className="service-item-icon" alt="Icon" />
                            <h3 className="service-item-title">
                                Hair Washing
                            </h3>
                            <p className="service-item-text">
                                Lorem Ipsum is the simply dummy text of the printing and typesetting industry. It has been industry best dummy text ever.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item-outer">
                            <img src="/src/assets/images/hot-stone.png" className="service-item-icon" alt="Icon" />
                            <h3 className="service-item-title">
                                Body Treatments
                            </h3>
                            <p className="service-item-text">
                                Lorem Ipsum is the simply dummy text of the printing and typesetting industry. It has been industry best dummy text ever.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item-outer">
                            <img src="/src/assets/images/treatment.png" className="service-item-icon" alt="Icon" />
                            <h3 className="service-item-title">
                                Beauty & Spa
                            </h3>
                            <p className="service-item-text">
                                Lorem Ipsum is the simply dummy text of the printing and typesetting industry. It has been industry best dummy text ever.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item-outer">
                            <img src="/src/assets/images/razor.png" className="service-item-icon" alt="Icon" />
                            <h3 className="service-item-title">
                                Stylist Shaving
                            </h3>
                            <p className="service-item-text">
                                Lorem Ipsum is the simply dummy text of the printing and typesetting industry. It has been industry best dummy text ever.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="service-item-outer">
                            <img src="/src/assets/images/hair-color.png" className="service-item-icon" alt="Icon" />
                            <h3 className="service-item-title">
                                Multi Hair Colors
                            </h3>
                            <p className="service-item-text">
                                Lorem Ipsum is the simply dummy text of the printing and typesetting industry. It has been industry best dummy text ever.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services