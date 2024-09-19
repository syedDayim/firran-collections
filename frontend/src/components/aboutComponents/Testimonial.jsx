import React from 'react';
import Slider from 'react-slick';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
    {
        name: "John Doe",
        designation: "CEO, Company",
        content: "This is the best service I have ever used! Highly recommended to everyone.",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Jane Smith",
        designation: "Marketing Manager",
        content: "Fantastic experience! Their attention to detail and quality of work is top-notch.",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Mike Johnson",
        designation: "Product Lead",
        content: "Absolutely wonderful! The team delivered beyond our expectations.",
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Emily Wilson",
        designation: "Designer",
        content: "Loved the collaboration and results. Exceptional service and great people!",
        image: "https://via.placeholder.com/150"
    }
];

// Custom Next Arrow
const NextArrow = ({ onClick }) => {
    return (
        <div className="arrow next" onClick={onClick}>
            <ArrowRight size={24} />
        </div>
    );
};

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => {
    return (
        <div className="arrow prev" onClick={onClick}>
            <ArrowLeft size={24} />
        </div>
    );
};

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <section className="testimonial-carousel-section">
            <div className="container">
                <h2 className="carousel-title">What Our Clients Say</h2>
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div className="testimonial-slide" key={index}>
                            <div className="testimonial-card">
                                <img src={testimonial.image} alt={`${testimonial.name}`} className="testimonial-avatar" />
                                <p className="testimonial-message">"{testimonial.content}"</p>
                                <h4 className="testimonial-name">{testimonial.name}</h4>
                                <p className="testimonial-designation">{testimonial.designation}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <style jsx>{`
                .testimonial-carousel-section {
                    padding: 4rem 1rem;
                    background-color: #f4f4f4;
                }

                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .carousel-title {
                    font-size: 2.5rem;
                    text-align: center;
                    margin-bottom: 2.5rem;
                    color: #333;
                    font-weight: 600;
                }

                .testimonial-slide {
                    padding: 0 15px;
                    outline: none;
                }

                .testimonial-card {
                    background: #ffffff;
                    border-radius: 10px;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                    padding: 3rem 2rem;
                    text-align: center;
                    margin: 1rem;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    height: 100%;
                }

                .testimonial-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
                }

                .testimonial-avatar {
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    margin-bottom: 1.5rem;
                    object-fit: cover;
                    border: 4px solid #debe6b;
                }

                .testimonial-message {
                    font-size: 1.1rem;
                    font-style: italic;
                    color: #555;
                    margin-bottom: 1.5rem;
                    line-height: 1.6;
                    padding: 0 1rem;
                }

                .testimonial-name {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 0.5rem;
                }

                .testimonial-designation {
                    font-size: 1rem;
                    color: #777;
                }

                .arrow {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #debe6b;
                    color: #333;
                    border-radius: 50%;
                    padding: 0.5rem;
                    cursor: pointer;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    z-index: 1;
                }

                .arrow.next {
                    right: 10px;
                }

                .arrow.prev {
                    left: 10px;
                }

                .slick-dots {
                    bottom: -30px;
                }

                .slick-dots li button:before {
                    font-size: 12px;
                }

                .slick-dots li.slick-active button:before {
                    color: #debe6b;
                }

                @media (max-width: 768px) {
                    .arrow {
                        display: none;
                    }

                    .testimonial-card {
                        margin: 1rem 0;
                    }

                    .testimonial-message {
                        font-size: 1rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default Testimonial;
