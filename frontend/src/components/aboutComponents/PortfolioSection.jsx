import React, { useState } from 'react';

const images = [
    { src: "https://via.placeholder.com/600", alt: "Gallery Image 1" },
    { src: "https://via.placeholder.com/600", alt: "Gallery Image 2" },
    { src: "https://via.placeholder.com/600", alt: "Gallery Image 3" },
    { src: "https://via.placeholder.com/600", alt: "Gallery Image 4" },
    { src: "https://via.placeholder.com/600", alt: "Gallery Image 5" },
    { src: "https://via.placeholder.com/600", alt: "Gallery Image 6" },
    { src: "https://via.placeholder.com/600", alt: "Gallery Image 7" },
    { src: "https://via.placeholder.com/600", alt: "Gallery Image 8" },
];

const PortfolioSection = () => {
    const [openImage, setOpenImage] = useState(null);

    const handleOpenImage = (image) => {
        setOpenImage(image);
    };

    const handleCloseImage = () => {
        setOpenImage(null);
    };

    return (
        <section className="portfolio-section">
            <div className="portfolio-container">
                <h2 className="portfolio-title">Firran Gallery</h2>
                <p className="portfolio-description">
                    Explore our recent projects and see the quality of our work. Click on an image to view it in detail.
                </p>
                <div className="portfolio-grid">
                    {images.map((image, index) => (
                        <div className="portfolio-item" key={index}>
                            <div className="portfolio-image-wrapper" onClick={() => handleOpenImage(image)}>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="portfolio-image"
                                />
                                <div className="portfolio-overlay">
                                    <span className="portfolio-view-text">View Image</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {openImage && (
                <div className="modal-overlay" onClick={handleCloseImage}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={handleCloseImage}>×</button>
                        <img src={openImage.src} alt={openImage.alt} className="modal-image" />
                    </div>
                </div>
            )}

            <style jsx>{`
                .portfolio-section {
                    padding: 4rem 1rem;
                    background-color: #f4f4f4;
                    text-align: center;
                }

                .portfolio-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 15px;
                }

                .portfolio-title {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #333;
                    margin-bottom: 1rem;
                }

                .portfolio-description {
                    font-size: 1.1rem;
                    color: #555;
                    margin-bottom: 2.5rem;
                    line-height: 1.6;
                    max-width: 800px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .portfolio-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 1.5rem;
                }

                .portfolio-item {
                    position: relative;
                    overflow: hidden;
                    border-radius: 15px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .portfolio-item:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
                }

                .portfolio-image-wrapper {
                    position: relative;
                    cursor: pointer;
                }

                .portfolio-image {
                    width: 100%;
                    height: auto;
                    border-radius: 15px;
                    transition: transform 0.3s ease;
                }

                .portfolio-image-wrapper:hover .portfolio-image {
                    transform: scale(1.05);
                }

                .portfolio-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 15px;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .portfolio-image-wrapper:hover .portfolio-overlay {
                    opacity: 1;
                }

                .portfolio-view-text {
                    color: #ffffff;
                    font-size: 1.2rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                /* Modal Styles */
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.7);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                    cursor: pointer;
                    overflow: hidden;
                }

                .modal-content {
                    background: #fff;
                    border-radius: 15px;
                    max-width: 90%;
                    max-height: 90%;
                    width: auto;
                    padding: 1.5rem;
                    position: relative;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    cursor: default;
                    overflow: hidden;
                }

                .modal-image {
                    width: auto;
                    max-width: 100%;
                    max-height: 80vh;
                    height: auto;
                    border-radius: 10px;
                }

                .modal-close {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: none;
                    border: none;
                    font-size: 2rem;
                    cursor: pointer;
                    color: #333;
                    transition: color 0.3s ease;
                }

                .modal-close:hover {
                    color: #000;
                }

                @media (max-width: 768px) {
                    .portfolio-title {
                        font-size: 2rem;
                    }

                    .portfolio-description {
                        font-size: 1rem;
                    }

                    .portfolio-grid {
                        gap: 1rem;
                    }

                    .portfolio-item {
                        margin-bottom: 1rem;
                    }

                    .modal-content {
                        padding: 1rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default PortfolioSection;
