import React, { useState } from 'react';

const AboutSection = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const tabs = [
        { id: 'tab1', title: 'Who We Are', icon: 'fas fa-users', content: 'We are innovators dedicated to transforming industries with cutting-edge solutions that improve lives and drive progress.' },
        { id: 'tab2', title: 'What We Do', icon: 'fas fa-cogs', content: 'We develop advanced technologies and provide tailored services to meet the evolving needs of our clients in a dynamic digital landscape.' },
        { id: 'tab3', title: 'Our Mission', icon: 'fas fa-bullseye', content: 'To empower businesses and individuals with innovative tools and strategies that fuel growth, efficiency, and sustainable success globally.' },
        { id: 'tab4', title: 'Our Vision', icon: 'fas fa-eye', content: 'A future where technology seamlessly integrates with human potential, unlocking a world of unlimited possibilities and positive impact.' },
    ];

    return (
        <section className="about-section">
            <div className="container">
                <h2 className="main-heading">About Our Company</h2>
                <p className="header-text">Pioneering innovative solutions for a digital world</p>
                
                <div className="content-wrapper">
                    <div className="tab-navigation">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                <i className={`${tab.icon} icon`}></i>
                                <span className="title">{tab.title}</span>
                            </button>
                        ))}
                    </div>

                    <div className="tab-content">
                        {tabs.map((tab) => (
                            <div key={tab.id} className={`tab-pane ${activeTab === tab.id ? 'active' : ''}`}>
                                <h3 className="content-heading">{tab.title}</h3>
                                <p className="content-text">{tab.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                :root {
                    --primary-color: #debe6b;
                    --background-color: #101010;
                    --white: #ffffff;
                    --transition: all 0.3s ease;
                }

                .about-section {
                    font-family: 'Segoe UI', 'Roboto', 'Helvetica', sans-serif;
                    color: var(--primary-color);
                    background-color: var(--background-color);
                    padding: 6rem 0;
                    line-height: 1.6;
                }

                .container {
                    width: 90%;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .main-heading {
                    color: var(--primary-color);
                    font-size: 2.5rem;
                    margin-bottom: 0.5rem;
                    font-weight: 300;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                }

                .header-text {
                    color: var(--white);
                    font-size: 1rem;
                    margin-bottom: 3rem;
                    opacity: 0.8;
                    font-weight: 300;
                    letter-spacing: 1px;
                }

                .content-wrapper {
                    display: flex;
                    gap: 3rem;
                    align-items: flex-start;
                }

                .tab-navigation {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    width: 25%;
                }

                .tab-button {
                    display: flex;
                    align-items: center;
                    padding: 1rem;
                    background: transparent;
                    border: none;
                    border-left: 3px solid transparent;
                    cursor: pointer;
                    transition: var(--transition);
                    text-align: left;
                    color: var(--white);
                    opacity: 0.7;
                }

                .tab-button:hover, .tab-button.active {
                    color: var(--primary-color);
                    opacity: 1;
                    border-left-color: var(--primary-color);
                }

                .tab-button .icon {
                    font-size: 1.2rem;
                    margin-right: 1rem;
                    width: 20px;
                    text-align: center;
                }

                .tab-button .title {
                    font-weight: 400;
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .tab-content {
                    background: var(--background-color);
                    width: 75%;
                    min-height: 300px;
                    position: relative;
                    overflow: hidden;
                }

                .tab-content::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 1px;
                    background: linear-gradient(to right, transparent, var(--primary-color), transparent);
                }

                .tab-pane {
                    display: none;
                    animation: fadeIn 0.5s ease-in-out;
                    padding: 2rem 0;
                }

                .tab-pane.active {
                    display: block;
                }

                .content-heading {
                    color: var(--primary-color);
                    margin-bottom: 1rem;
                    font-size: 1.5rem;
                    font-weight: 400;
                    letter-spacing: 1px;
                }

                .content-text {
                    color: var(--white);
                    font-size: 1rem;
                    line-height: 1.8;
                    font-weight: 300;
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @media (max-width: 768px) {
                    .about-section {
                        padding: 4rem 0;
                    }

                    .main-heading {
                        font-size: 2rem;
                    }

                    .content-wrapper {
                        flex-direction: column;
                    }

                    .tab-navigation, .tab-content {
                        width: 100%;
                    }

                    .tab-button {
                        border-left: none;
                        border-bottom: 2px solid transparent;
                    }

                    .tab-button:hover, .tab-button.active {
                        border-left-color: transparent;
                        border-bottom-color: var(--primary-color);
                    }

                    .tab-content {
                        min-height: 200px;
                    }
                }
            `}</style>
        </section>
    );
};

export default AboutSection;