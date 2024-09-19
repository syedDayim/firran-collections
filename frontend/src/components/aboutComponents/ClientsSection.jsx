import React from 'react';

const ClientsSection = () => {
    return (
        <section className="clients-section">
            <div className="overlay">
                <div className="container">
                    <div className="row header-row">
                        <div className="col-xs-12">
                            <header className="header text-center">
                                <h2 className="heading">Our Happy Clients</h2>
                                <p className="description">
                                    We take pride in delivering exceptional service and forging strong partnerships with our clients. 
                                    Here are some of the companies we've had the privilege to collaborate with.
                                </p>
                            </header>
                        </div>
                    </div>
                    <div className="row logos-row">
                        <div className="col-xs-12">
                            <ul className="client-logos">
                                <li className="logo-item"><a href="#"><img src="http://placehold.it/150x150" alt="Client 1" /></a></li>
                                <li className="logo-item"><a href="#"><img src="http://placehold.it/150x150" alt="Client 2" /></a></li>
                                <li className="logo-item"><a href="#"><img src="http://placehold.it/150x150" alt="Client 3" /></a></li>
                                <li className="logo-item"><a href="#"><img src="http://placehold.it/150x150" alt="Client 4" /></a></li>
                                <li className="logo-item"><a href="#"><img src="http://placehold.it/150x150" alt="Client 5" /></a></li>
                                <li className="logo-item"><a href="#"><img src="http://placehold.it/150x150" alt="Client 6" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* CSS Styles */}
            <style jsx>{`
                .clients-section {
                    position: relative;
                    background-image: url('http://placehold.it/1920x620');
                    background-size: cover;
                    background-position: center;
                    background-attachment: fixed;
                    color: #fff;
                }

                .overlay {
                    background: rgba(0, 0, 0, 0.65); /* Semi-transparent overlay */
                    padding: 60px 0; /* Adjusted padding for a compact look */
                }

                .header-row {
                    margin-bottom: 30px; /* Reduced bottom margin for compactness */
                }

                .heading {
                    font-size: 2.5rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 5px;
                    color: #f1c40f; /* Professional gold color */
                }

                .description {
                    max-width: 700px;
                    margin: 0 auto;
                    font-size: 1rem;
                    line-height: 1.6;
                    color: #f0f0f0;
                    opacity: 0.9;
                }

                .logos-row {
                    display: flex;
                    justify-content: center;
                }

                .client-logos {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 20px; /* Added space between logos */
                    padding: 0;
                    margin: 0;
                    list-style: none;
                }

                .logo-item {
                    flex: 1 1 120px;
                    max-width: 120px;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .logo-item img {
                    width: 100%;
                    height: auto;
                    border-radius: 5px; /* Subtle rounded corners for professionalism */
                    border: 1px solid #ddd;
                    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .logo-item:hover img {
                    transform: scale(1.05);
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
                }

                @media (max-width: 768px) {
                    .heading {
                        font-size: 2rem;
                    }

                    .description {
                        font-size: 0.9rem;
                    }

                    .logo-item {
                        flex: 1 1 100px;
                        max-width: 100px;
                    }
                }

                @media (max-width: 576px) {
                    .heading {
                        font-size: 1.8rem;
                    }

                    .logos-row {
                        flex-direction: column;
                    }

                    .logo-item {
                        margin-bottom: 15px;
                    }
                }
            `}</style>
        </section>
    );
};

export default ClientsSection;
