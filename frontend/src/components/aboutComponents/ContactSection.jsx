import React from 'react';

const ContactSection = () => {
    return (
        <section id="contact" className="contact-sec">
            <div className="main-header left-heading bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-4">
                            <h2 className="main-heading" data-heading="06">contact</h2>
                        </div>
                        <div className="col-xs-12 col-sm-8">
                            <div className="txt-wrap">
                                <p>Lorem ipsum dolor sit amet, ac aptent pellentesque ac, urna libero enim...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-holder overlay bg-full" style={{ backgroundImage: "url(http://placehold.it/1920x905)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h3 className="main-heading text-center text-uppercase">say hello!</h3>
                            <ul className="list-unstyled contact-list">
                                <li>
                                    <i className="icon icon-telephone"></i>
                                    <span className="tel">
                                        <a href="tel:12345678910">1 (234) 567 89 10</a>
                                        <a href="tel:00987654321">0 (098) 765 43 21</a>
                                    </span>
                                </li>
                                <li>
                                    <i className="icon icon-worldwide"></i>
                                    <span className="mail">
                                        <a href="www.oreotheme.com">www.oreotheme.com</a>
                                        <a href="mailto:support@oreo.com;">support@oreo.com</a>
                                    </span>
                                </li>
                                <li>
                                    <i className="icon icon-map"></i>
                                    <address>370 Fifth Avenue, 32th floor,<br />New York, NY 20228, USA</address>
                                </li>
                            </ul>
                            <form action="inc/process.php" className="contact-form">
                                <div className="col">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Enter Your Name" name="name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Enter Your Email" name="email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Enter Subject" name="subject" />
                                    </div>
                                </div>
                                <div className="col textarea">
                                    <label htmlFor="message">Your Message</label>
                                    <textarea id="message" name="comment"></textarea>
                                    <button type="submit" className="btn btn4" id="form-submit">submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
