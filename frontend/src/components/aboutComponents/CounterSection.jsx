import React from 'react';

const CounterSection = () => {
    return (
        <section className="counter-sec overlay bg-full" style={{ backgroundImage: "url(http://placehold.it/1920x715)" }}>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <header className="header">
                            <h2 className="heading text-uppercase">some fun facts</h2>
                            <p>Lorem ipsum dolor sit amet, diam in vestibulum ornare eget integer...</p>
                        </header>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <ul className="list-unstyled counter-holder">
                            <li className="text-center">
                                <span className="icon"><i className="icon-clock"></i></span>
                                <span className="count">3451</span>
                                <span className="sub-title">hours of work</span>
                            </li>
                            <li className="text-center">
                                <span className="icon"><i className="icon-projection"></i></span>
                                <span className="count">273</span>
                                <span className="sub-title">finished projects</span>
                            </li>
                            <li className="text-center">
                                <span className="icon"><i className="icon-handshake"></i></span>
                                <span className="count">554</span>
                                <span className="sub-title">satisfied clients</span>
                            </li>
                            <li className="text-center">
                                <span className="icon"><i className="icon-cup"></i></span>
                                <span className="count">2954</span>
                                <span className="sub-title">coffee cups</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CounterSection;
