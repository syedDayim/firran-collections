import React from 'react';

const ClientsSection = () => {
    return (
        <section className="client-sec overlay bg-full" style={{ backgroundImage: "url(http://placehold.it/1920x620)" }}>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <header className="header text-right">
                            <h2 className="heading text-uppercase">our happy clients</h2>
                            <p>Lorem ipsum dolor sit amet, diam in vestibulum ornare eget integer, et...</p>
                        </header>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <ul className="list-unstyled client-logo">
                            <li><a href="#"><img src="http://placehold.it/180x125" alt="LOGO" /></a></li>
                            <li><a href="#"><img src="http://placehold.it/180x125" alt="LOGO" /></a></li>
                            <li><a href="#"><img src="http://placehold.it/180x125" alt="LOGO" /></a></li>
                            <li><a href="#"><img src="http://placehold.it/180x125" alt="LOGO" /></a></li>
                            <li><a href="#"><img src="http://placehold.it/180x125" alt="LOGO" /></a></li>
                            <li><a href="#"><img src="http://placehold.it/180x125" alt="LOGO" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
