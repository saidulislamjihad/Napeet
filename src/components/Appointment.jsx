import React from "react";
import './Appointment.css'
import Heading from "./Heading";

function Appointment(){
    return(
        <section className="appointment-section">
            <Heading/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 m-auto">
                        <form className="appointment-form form-group">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="input-group-wrap">
                                        <input type="text" name="name" className="form-control" placeholder="Name*" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group-wrap">
                                        <input type="eamil" name="email" className="form-control" placeholder="Email*" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group-wrap">
                                        <input type="number" name="phone" className="form-control" placeholder="Phone*" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group-wrap">
                                        <select name="service_type" className="form-control">
                                            <option value='Hair Cut'>Hair Cut</option>
                                            <option value='Beauty & Spa'>Beauty & Spa</option>
                                            <option value='Shaving'>Shaving</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="input-group-wrap">
                                        <input type="date" name="date" className="form-control" placeholder="mm/dd/yyyy*" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="input-group-wrap">
                                        <textarea name="message" className="form-control" placeholder="Message*"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="custom-btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Appointment