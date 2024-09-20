import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <section className="contact-section">
            <div className="contact-container">
                <div className="contact-info">
                    <h2 className="section-title">Get in Touch</h2>
                    <p className="section-description">We'd love to hear from you. Let's create something great together!</p>
                    
                    <div className="info-items">
                        <div className="info-item">
                            <div className="info-text">
                                <p><Phone size={18} className="icon" />+1 (234) 567-8910</p>
                                <p><Phone size={18} className="icon" />+1 (987) 654-3210</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <Mail size={18} className="icon" />
                            <div className="info-text">
                                <p>contact@example.com</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <MapPin size={18} className="icon" />
                            <div className="info-text">
                                <p>123 Innovation Ave,</p>
                                <p>Tech City, TC 10001</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <h2 className="form-title">Send Us a Message</h2>
                        <div className="input-group">
                            <input 
                                type="text" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleInputChange} 
                                placeholder="Your Name" 
                                required 
                            />
                        </div>
                        <div className="input-group">
                            <input 
                                type="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleInputChange} 
                                placeholder="Your Email" 
                                required 
                            />
                        </div>
                        <div className="input-group">
                            <input 
                                type="text" 
                                name="subject" 
                                value={formData.subject} 
                                onChange={handleInputChange} 
                                placeholder="Subject" 
                                required 
                            />
                        </div>
                        <div className="input-group">
                            <textarea 
                                name="message" 
                                value={formData.message} 
                                onChange={handleInputChange} 
                                placeholder="Your Message" 
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn">
                            Send Message
                            <Send size={18} className="send-icon" />
                        </button>
                    </form>
                </div>
            </div>

            <style jsx>{`
                .contact-section {
                    background-color: #101010;
                    color: #debe6b;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-family: 'Arial', sans-serif;
                    padding: 2rem 0;
                }

                .contact-container {
                    display: flex;
                    width: 100%;
                    max-width: 1200px;
                    margin: 0 2rem;
                    background-color: rgba(222, 190, 107, 0.05);
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: 0 0 15px rgba(222, 190, 107, 0.1);
                }

                .contact-info,
                .contact-form-container {
                    flex: 1;
                    padding: 3rem;
                }

                .contact-info {
                    background-color: rgba(222, 190, 107, 0.1);
                }

                .section-title,
                .form-title {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                    color: #debe6b;
                }

                .section-description {
                    margin-bottom: 2.5rem;
                    opacity: 0.8;
                    line-height: 1.6;
                    font-size: 1rem;
                }

                .info-items {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }

                .info-item {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    font-size: 1rem;
                }

                .icon {
                    color: #debe6b;
                    flex-shrink: 0;
                }

                .info-text {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .info-text p {
                    margin: 0;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .contact-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .input-group input,
                .input-group textarea {
                    width: 100%;
                    padding: 1rem;
                    background-color: rgba(222, 190, 107, 0.1);
                    border: 1px solid rgba(222, 190, 107, 0.3);
                    border-radius: 4px;
                    color: #debe6b;
                    transition: all 0.3s ease;
                    font-size: 1rem;
                }

                .input-group input::placeholder,
                .input-group textarea::placeholder {
                    color: rgba(222, 190, 107, 0.5);
                }

                .input-group textarea {
                    height: 150px;
                    resize: vertical;
                }

                .input-group input:focus,
                .input-group textarea:focus {
                    border-color: #debe6b;
                    background-color: rgba(222, 190, 107, 0.05);
                    outline: none;
                }

                .submit-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    padding: 1rem;
                    background-color: #debe6b;
                    color: #101010;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    font-weight: bold;
                    font-size: 1rem;
                }

                .submit-btn:hover {
                    background-color: #c5a55f;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 8px rgba(222, 190, 107, 0.2);
                }

                .send-icon {
                    transition: transform 0.3s ease;
                }

                .submit-btn:hover .send-icon {
                    transform: translateX(3px);
                }

                @media (max-width: 1024px) {
                    .contact-container {
                        flex-direction: column;
                        margin: 0 1rem;
                    }

                    .contact-info,
                    .contact-form-container {
                        padding: 2rem;
                    }

                    .section-title,
                    .form-title {
                        font-size: 2rem;
                    }
                }

                @media (max-width: 640px) {
                    .contact-info,
                    .contact-form-container {
                        padding: 1.5rem;
                    }

                    .section-title,
                    .form-title {
                        font-size: 1.8rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default ContactSection;