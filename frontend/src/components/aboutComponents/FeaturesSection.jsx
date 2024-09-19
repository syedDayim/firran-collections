import React from 'react';

const FeaturesSection = () => {
    return (
        <section id="features" className="feature-sec">
            <div className="main-header left-heading bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-4">
                            <h2 className="main-heading" data-heading="02">features</h2>
                        </div>
                        <div className="col-xs-12 col-sm-8">
                            <div className="txt-wrap">
                                <p>Lorem ipsum dolor sit amet, ac aptent pellentesque ac, urna libero enim<br /> Malesuada ut pede wisi, vitae dapibus egestas, duis odio diam mollitia consequat<br /> elementum </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <ul className="list-unstyled tabset">
                            <li>
                                <a className="active" href="#tab5">
                                    <span className="icon"><i className="icon-layers"></i><i className="icon-layers"></i></span>
                                    <span className="title">web design</span>
                                </a>
                            </li>
                            <li>
                                <a href="#tab6">
                                    <span className="icon"><i className="icon-layout"></i><i className="icon-layout"></i></span>
                                    <span className="title">development</span>
                                </a>
                            </li>
                            <li>
                                <a href="#tab7">
                                    <span className="icon"><i className="icon-idea"></i><i className="icon-idea"></i></span>
                                    <span className="title">branding</span>
                                </a>
                            </li>
                            <li>
                                <a href="#tab8">
                                    <span className="icon"><i className="icon-shopping-cart"></i><i className="icon-shopping-cart"></i></span>
                                    <span className="title">marketing</span>
                                </a>
                            </li>
                            <li>
                                <a href="#tab9">
                                    <span className="icon"><i className="icon-settings"></i><i className="icon-settings"></i></span>
                                    <span className="title">free support</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 tab-content">
                        {/* Repeat similar structure for each tab */}
                        <div id="tab5">
                            <div className="text-wrap text-right">
                                <h3 className="heading text-uppercase">web design</h3>
                                <p>Lorem ipsum dolor sit amet, diam in vestibulum ornare eget integer...</p>
                                <ul className="list-unstyled support-list">
                                    <li><i className="fa fa-check-square"></i> Lorem ipsum dolor sit amet</li>
                                    {/* Repeat list items as needed */}
                                </ul>
                            </div>
                            <div className="img-holder">
                                <img src="http://placehold.it/550x375" alt="image description" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
