import React, { useEffect } from 'react';

const MainSlider = () => {
    useEffect(() => {
        console.log("MainSlider rendered");
    }, []);

    return (
        <div className="main-banner top-slider-fadeani">
            <div className="slide overlay bg-full" style={{ backgroundImage: "url(http://placehold.it/1920x830)" }}>
                <div className="caption text-center">
                    <div className="animated">
                        <span className="title">simple & creative</span>
                        <h1>we are <span className="clr">Firran</span></h1>
                        <span className="sub-title">you will get more than you expected</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainSlider;
