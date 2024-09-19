import React from 'react';

const NewsletterSection = () => {
    return (
        <section className="newsletter-sec">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <header className="header text-center">
                            <h4 className="heading2">subscribe to startos newsletter now!</h4>
                            <p>Lorem ipsum dolor sit amet, faucibus auctor amet, mi scelerisque interdum, leo...</p>
                        </header>
                        <div id="mc_embed_signup">
                            <form action="//htmlbeans.us11.list-manage.com/subscribe/post?u=cb2d5a07fdf0d86c96f260674&amp;id=8e2ec675d3" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate newsletter-form" target="_blank" novalidate>
                                <div id="mc_embed_signup_scroll">
                                    <div className="mc-field-group">
                                        <input type="email" value="" name="EMAIL" className="required form-control email" id="mce-EMAIL" placeholder="Enter Your Email" />
                                    </div>
                                    <div className="clear">
                                        <input type="submit" value="subscribe" name="subscribe" id="mc-embedded-subscribe" className="button btn btn2" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;
