import React, { useEffect, useState } from 'react';
import { Camera, Briefcase, Users, Coffee } from 'lucide-react';

const CounterItem = ({ icon: Icon, end, label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000; // duration of the animation in milliseconds
        const incrementTime = 30; // how often to update the count in milliseconds
        const increment = end / (duration / incrementTime);

        const counter = setInterval(() => {
            start += increment;
            if (start >= end) {
                start = end;
                clearInterval(counter);
            }
            setCount(Math.floor(start));
        }, incrementTime);

        return () => clearInterval(counter);
    }, [end]);

    return (
        <div className="counter-item">
            <Icon size={48} color="#debe6b" />
            <span className="counter-number">{count}</span>
            <span className="counter-label">{label}</span>
        </div>
    );
};

const CounterSection = () => {
    return (
        <section className="combined-section py-5">
            <div className="counter-section">
                <h2 className="section-title gold">SOME NUMBERS</h2>
                <p className="section-description">Discover the numbers behind our success story</p>
                <div className="counter-list">
                    <CounterItem icon={Camera} end={3451} label="Hours of Work" />
                    <CounterItem icon={Briefcase} end={273} label="Finished Projects" />
                    <CounterItem icon={Users} end={554} label="Satisfied Clients" />
                    <CounterItem icon={Coffee} end={2954} label="Coffee Cups" />
                </div>
            </div>

            <style jsx>{`
                .combined-section {
                    position: relative;
                    overflow: hidden;
                    font-family: Arial, sans-serif;
                    color: #ffffff;
                    background-color: #101010;
                    padding: 2rem 0;
                    text-align: center;
                }

                .combined-section::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-image: url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
                    background-size: cover;
                    background-position: center;
                    filter: brightness(30%); /* Adjust the darkness level */
                    z-index: -2;
                }

                .combined-section::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.6); /* Adjust the opacity level */
                    z-index: -1;
                }

                .section-title {
                    font-size: 2rem;
                    margin-bottom: 0.5rem;
                    font-weight: 300;
                }

                .gold {
                    color: #debe6b;
                }

                .section-description {
                    font-size: 1rem;
                    margin-bottom: 1.5rem;
                    opacity: 0.8;
                }

                .counter-list {
                    display: flex;
                    justify-content: space-around;
                    flex-wrap: wrap;
                    margin-top: 2rem;
                }

                .counter-item {
                    flex: 1;
                    min-width: 200px;
                    margin: 1rem;
                }

                .counter-number {
                    display: block;
                    font-size: 2.5rem;
                    font-weight: bold;
                    color: #debe6b;
                    margin: 0.5rem 0;
                }

                .counter-label {
                    font-size: 1rem;
                    opacity: 0.8;
                }

                @media (max-width: 768px) {
                    .counter-item {
                        min-width: 150px;
                    }
                }
            `}</style>
        </section>
    );
};

export default CounterSection;
