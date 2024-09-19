import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TeamCarousel = () => {
    const teamMembers = [
        { id: 'member1', name: 'Jonathan Doe', role: 'Web Designer', image: 'http://placehold.it/200x200', twitter: '#', linkedin: '#', github: '#' },
        { id: 'member2', name: 'Anna Smith', role: 'Graphic Designer', image: 'http://placehold.it/200x200', twitter: '#', linkedin: '#', github: '#' },
        { id: 'member3', name: 'Michael Brown', role: 'Project Manager', image: 'http://placehold.it/200x200', twitter: '#', linkedin: '#', github: '#' },
        { id: 'member4', name: 'Emily Davis', role: 'UX Researcher', image: 'http://placehold.it/200x200', twitter: '#', linkedin: '#', github: '#' },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className="team-carousel-section">
            <div className="container">
                <h2 className="section-title">Firran Team</h2>
                <p className="section-description">Meet the innovative minds behind our success</p>

                <Slider {...settings} className="team-slider">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="team-card-wrapper">
                            <div className="team-card">
                                <img src={member.image} alt={member.name} className="team-image" />
                                <div className="team-card-content">
                                    <h3 className="team-member-name">{member.name}</h3>
                                    <p className="team-member-role">{member.role}</p>
                                    <div className="team-social-links">
                                        <a href={member.twitter} className="team-social-link"><i className="fab fa-twitter"></i></a>
                                        <a href={member.linkedin} className="team-social-link"><i className="fab fa-linkedin"></i></a>
                                        <a href={member.github} className="team-social-link"><i className="fab fa-github"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <style jsx>{`
                :root {
                    --primary-color: #debe6b;
                    --background-color: #101010;
                    --white: #ffffff;
                    --transition: all 0.3s ease;
                }

                .team-carousel-section {
                    font-family: 'Segoe UI', 'Roboto', 'Helvetica', sans-serif;
                    color: var(--primary-color);
                    background-color: var(--background-color);
                    padding: 4rem 0;
                    line-height: 1.6;
                }

                .container {
                    width: 90%;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .section-title {
                    color: var(--primary-color);
                    font-size: 2.5rem;
                    margin-bottom: 0.5rem;
                    font-weight: 300;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    text-align: center;
                }

                .section-description {
                    color: var(--white);
                    font-size: 1rem;
                    margin-bottom: 2rem;
                    opacity: 0.8;
                    font-weight: 300;
                    letter-spacing: 1px;
                    text-align: center;
                }

                .team-slider {
                    padding: 2rem 0;
                }

                .team-card-wrapper {
                    padding: 0 1rem;
                }

                .team-card {
                    background-color: #1a1a1a;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    transition: var(--transition);
                    margin: 0 0.5rem;
                    padding: 1rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }

                .team-card:hover {
                    transform: translateY(-5px);
                }

                .team-image {
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                    object-fit: cover;
                    margin-bottom: 1rem;
                }

                .team-card-content {
                    padding: 1rem;
                }

                .team-member-name {
                    color: var(--primary-color);
                    font-size: 1.2rem;
                    margin-bottom: 0.5rem;
                    text-transform: uppercase;
                }

                .team-member-role {
                    color: var(--white);
                    font-size: 0.9rem;
                    margin-bottom: 0.5rem;
                    opacity: 0.8;
                }

                .team-social-links {
                    display: flex;
                    gap: 0.5rem;
                    justify-content: center;
                }

                .team-social-link {
                    color: var(--primary-color);
                    font-size: 1rem;
                    transition: var(--transition);
                }

                .team-social-link:hover {
                    color: var(--white);
                }

                @media (max-width: 768px) {
                    .team-carousel-section {
                        padding: 3rem 0;
                    }

                    .section-title {
                        font-size: 2rem;
                    }

                    .team-card {
                        margin: 0 0.5rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default TeamCarousel;
