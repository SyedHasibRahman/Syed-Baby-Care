import React from 'react';
import './Contactus.css';

const Contactus = () => {
    return (
        <div>
            {/* <div>
                <div className="container contact-form">
                    <div className="contact-image">
                        <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
                    </div>
                    <form>
                        <h3>Contact Us</h3>
                        <div className="row">

                            <div className="col-md-12">
                                <div className="form-group py-2">
                                    <input type="text" name="txtName" className="form-control p-3" placeholder="Your Name *" readOnly="" required />
                                </div>
                                <div className="form-group py-2">
                                    <input type="text" name="txtEmail" className="form-control p-3" placeholder="Your Email *" readOnly="" required />
                                </div>
                                <div className="form-group py-2">
                                    <input type="text" name="txtPhone" className="form-control p-3" placeholder="Your Phone Number *" required />
                                </div>

                            </div>
                            <div className="col-md-12">
                                <div className="form-group py-3">
                                    <textarea name="txtMsg" className="form-control p-3" placeholder="Your Message *"   ></textarea>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group py-3">
                                    <input type="submit" name="btnSubmit" className="btnContact btn-warning" readOnly="Send Message" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div> */}
            {/* ----------------- */}
            <section className="contactus mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <img className="img-fluid p-4" src="https://www.kindpng.com/picc/m/393-3938892_get-in-touch-get-in-touch-png-transparent.png" alt="" />
                        </div>
                        <div className="col-sm-6 py-3">
                            <div>
                                <h2>CONTACT US</h2>
                            </div>
                            <form method="" data-form-title="CONTACT US">
                                <input type="hidden" data-form-email="true" />
                                <div className="form-group">
                                    <input type="text" className="form-control" name="name" required="" placeholder="Name*" data-form-field="Name" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" name="email" required="" placeholder="Email*" data-form-field="Email" />
                                </div>
                                <div className="form-group">
                                    <input type="tel" className="form-control" name="phone" placeholder="Phone" data-form-field="Phone" />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" name="message" placeholder="Message" rows="7" data-form-field="Message"></textarea>
                                </div>
                                <div>
                                    <span type="" className="btn btn-lg btn-danger mt-3">CONTACT US</span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contactus;