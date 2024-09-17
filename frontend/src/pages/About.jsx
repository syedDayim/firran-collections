import React from 'react';
import '../styles/about.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
    return (
        <>
            <Header />
            <div className="about-container">
                {/* About Us Section */}
                <section className="about-us">
                    <div className="services-header">
                        <h2>About Us</h2>
                        <p className="intro-text">
                            We blend tradition with modern design, delivering exquisite and unique fashion pieces for every occasion.
                        </p>
                    </div>

                    <div className="about-content">
                        {/* Fashion Image */}
                        <div className="about-image">
                            <img src="https://via.placeholder.com/600x400?text=Fashion+Design" alt="Fashion Studio" />
                        </div>

                        {/* Content */}
                        <div className="about-description">
                            <h3>Inspired by timeless fashion, crafted with precision.</h3>
                            <p>
                                Our brand thrives on creativity and craftsmanship. Each piece is thoughtfully designed to inspire confidence and make a statement.
                            </p>
                            <ul>
                                <li>Premium materials sourced globally.</li>
                                <li>Ethically produced with a focus on sustainability.</li>
                                <li>Handcrafted designs for modern elegance.</li>
                                <li>Personalized fashion advice and styling.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Fashion Statistics Section */}
                <section className="stats-section">
                    <div className="stat-box">
                        <h4>50+</h4>
                        <p>Designers</p>
                    </div>
                    <div className="stat-box">
                        <h4>30+</h4>
                        <p>Collections</p>
                    </div>
                    <div className="stat-box">
                        <h4>15+</h4>
                        <p>Runway Shows</p>
                    </div>
                    <div className="stat-box">
                        <h4>100+</h4>
                        <p>Fashion Awards</p>
                    </div>
                </section>

                {/* Services Section */}
                <section className="services-section">
                    <div className="services-header">
                        <h2>Services</h2>
                        <p className="intro-text">
                            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit.
                        </p>
                    </div>

                    <div className="services-grid">
                        {/* Service Cards */}
                        <div className="service-card">
                            <img src="https://via.placeholder.com/80?text=Icon" alt="Service Icon" className="service-icon" />
                            <h4>Nesciunt Mete</h4>
                            <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempora et consequatur.</p>
                        </div>

                        <div className="service-card">
                            <img src="https://via.placeholder.com/80?text=Icon" alt="Service Icon" className="service-icon" />
                            <h4>Eosle Commodi</h4>
                            <p>Ut autem aut nam. Sint sint aut facilis nam iusto sint. Libero corrupti neque eum non et nesciunt dolorem.</p>
                        </div>

                        <div className="service-card">
                            <img src="https://via.placeholder.com/80?text=Icon" alt="Service Icon" className="service-icon" />
                            <h4>Ledo Markt</h4>
                            <p>Et occaecati voluptatem nihil sed. Quidem fuga consequatur. Minima aut vel. Voluptates sit aliquid eos earum corrupti.</p>
                        </div>

                        <div className="service-card">
                            <img src="https://via.placeholder.com/80?text=Icon" alt="Service Icon" className="service-icon" />
                            <h4>Asperiores Commodit</h4>
                            <p>Non est temporibus minus omnis sed dolor esse consequatur. Fugiat sit error. Fuga sit provident adipisci neque.</p>
                        </div>

                        <div className="service-card">
                            <img src="https://via.placeholder.com/80?text=Icon" alt="Service Icon" className="service-icon" />
                            <h4>Velit Doloremque</h4>
                            <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut beatae corporis aut. Sed animi et iurian alias ut labore.</p>
                        </div>

                        <div className="service-card">
                            <img src="https://via.placeholder.com/80?text=Icon" alt="Service Icon" className="service-icon" />
                            <h4>Dolori Architecto</h4>
                            <p>Hic molestias ea quibusdam eos. Fugit enim doloremque aut fugiat non et. Recusandae deleniti cumque eius.</p>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    );
};

export default About;
