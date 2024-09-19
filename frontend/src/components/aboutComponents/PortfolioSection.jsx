import React from 'react';

const PortfolioSection = () => {
    return (
        <section id="works" className="portfolio-sec">
            <div className="main-header bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-4 text-right col-sm-push-8">
                            <h2 className="main-heading" data-heading="03">Works</h2>
                        </div>
                        <div className="col-xs-12 col-sm-8 text-right col-sm-pull-4">
                            <div className="txt-wrap">
                                <p>Lorem ipsum dolor sit amet, ac aptent pellentesque ac, urna libero enim...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {/* Portfolio Item 1 */}
                    <div className="col-xs-12 col-sm-6 col-md-4 portfolio-item">
                        <div className="box">
                            <img src="http://placehold.it/480x696" alt="Portfolio Item 1" />
                            <div className="over text-center">
                                <h3 className="heading text-uppercase">Creative Elements</h3>
                                <span className="sub-title">Design</span>
                            </div>
                        </div>
                    </div>

                    {/* Portfolio Item 2 */}
                    <div className="col-xs-12 col-sm-6 col-md-4 portfolio-item">
                        <div className="box">
                            <img src="http://placehold.it/480x696" alt="Portfolio Item 2" />
                            <div className="over text-center">
                                <h3 className="heading text-uppercase">Artistic Visions</h3>
                                <span className="sub-title">Illustrate</span>
                            </div>
                        </div>
                    </div>

                    {/* Portfolio Item 3 */}
                    <div className="col-xs-12 col-sm-6 col-md-4 portfolio-item">
                        <div className="box">
                            <img src="http://placehold.it/480x696" alt="Portfolio Item 3" />
                            <div className="over text-center">
                                <h3 className="heading text-uppercase">Branding Identity</h3>
                                <span className="sub-title">Brand</span>
                            </div>
                        </div>
                    </div>

                    {/* Portfolio Item 4 */}
                    <div className="col-xs-12 col-sm-6 col-md-4 portfolio-item">
                        <div className="box">
                            <img src="http://placehold.it/480x696" alt="Portfolio Item 4" />
                            <div className="over text-center">
                                <h3 className="heading text-uppercase">Innovative Ideas</h3>
                                <span className="sub-title">Concept</span>
                            </div>
                        </div>
                    </div>

                    {/* Portfolio Item 5 */}
                    <div className="col-xs-12 col-sm-6 col-md-4 portfolio-item">
                        <div className="box">
                            <img src="http://placehold.it/480x696" alt="Portfolio Item 5" />
                            <div className="over text-center">
                                <h3 className="heading text-uppercase">Modern Layouts</h3>
                                <span className="sub-title">Design</span>
                            </div>
                        </div>
                    </div>

                    {/* Portfolio Item 6 */}
                    <div className="col-xs-12 col-sm-6 col-md-4 portfolio-item">
                        <div className="box">
                            <img src="http://placehold.it/480x696" alt="Portfolio Item 6" />
                            <div className="over text-center">
                                <h3 className="heading text-uppercase">Sketch Concepts</h3>
                                <span className="sub-title">Illustrate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
