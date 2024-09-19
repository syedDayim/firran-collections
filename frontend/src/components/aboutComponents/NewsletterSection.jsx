import React from 'react';

const NewsletterSection = () => {
    return (
        <section className="newsletter-section my-5 py-5 ">
            <div className="newsletter-container">
                <div className="newsletter-content">
                    <header className="newsletter-header">
                        <h4 className="newsletter-title">Stay Informed</h4>
                        <p className="newsletter-description">Subscribe to our newsletter for exclusive updates</p>
                    </header>
                    <div className="newsletter-form-container">
                        <form action="#" method="post" className="newsletter-form" target="_blank" noValidate>
                            <div className="form-group">
                                <input type="email" name="EMAIL" className="newsletter-input" id="newsletter-email" placeholder="Your email address" required />
                                <button type="submit" className="newsletter-submit">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .newsletter-section {
                    font-family: 'Segoe UI', 'Roboto', 'Helvetica', sans-serif;
                    background-color: #ffffff;
                    padding: 4rem 0;
                    color: #333333;
                    
                }

                .newsletter-container {
                    width: 90%;
                    max-width: 800px;
                    margin: 0 auto;
                }

                .newsletter-content {
                    text-align: center;
                }

                .newsletter-header {
                    margin-bottom: 2rem;
                }

                .newsletter-title {
                    font-size: 2.5rem;
                    color: #333;
                    margin-bottom: 0.5rem;
                    font-weight: 300;
                    letter-spacing: 1px;
                }

                .newsletter-description {
                    font-size: 1rem;
                    color: #666;
                    margin-bottom: 2rem;
                    font-weight: 300;
                }

                .newsletter-form {
                    display: flex;
                    justify-content: center;
                    max-width: 600px;
                    margin: 0 auto;
                }

                .form-group {
                    display: flex;
                    width: 100%;
                }

                .newsletter-input {
                    flex-grow: 1;
                    padding: 1rem 1.5rem;
                    font-size: 1rem;
                    border: 1px solid #e0e0e0;
                    border-radius: 30px 0 0 30px;
                    outline: none;
                    transition: border-color 0.3s ease;
                }

                .newsletter-input:focus {
                    border-color: #333;
                }

                .newsletter-submit {
                    background-color: #333;
                    color: #debe6b;
                    border: none;
                    padding: 1rem 2rem;
                    font-weight: bold;
                    font-size: 1rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                    border-radius: 0 30px 30px 0;
                    white-space: nowrap;
                }

                .newsletter-submit:hover {
                    background-color: #555;
                }

                @media (max-width: 768px) {
                    .newsletter-section {
                        padding: 3rem 0;
                    }

                    .newsletter-title {
                        font-size: 2rem;
                    }

                    .form-group {
                        flex-direction: column;
                    }

                    .newsletter-input,
                    .newsletter-submit {
                        width: 100%;
                        border-radius: 30px;
                        margin-bottom: 1rem;
                    }

                    .newsletter-submit {
                        margin-bottom: 0;
                    }
                }
            `}</style>
        </section>
    );
};

export default NewsletterSection;