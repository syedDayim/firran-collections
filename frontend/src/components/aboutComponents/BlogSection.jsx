import React from 'react';

const BlogSection = () => {
    return (
        <section id="blog" className="blog-sec">
            <div className="main-header bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-4 text-right col-sm-push-8">
                            <h2 className="main-heading" data-heading="05">blog</h2>
                        </div>
                        <div className="col-xs-12 col-sm-8 text-right col-sm-pull-4">
                            <div className="txt-wrap">
                                <p>Lorem ipsum dolor sit amet, ac aptent pellentesque ac, urna libero enim...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="holder">
                <div className="img-holder">
                    <img src="http://placehold.it/960x590" alt="image description" />
                </div>
                <div className="post-text">
                    <h3 className="heading text-uppercase">some facts about oreo</h3>
                    <time datetime="2017-02-14" className="time">november 23, 2017</time>
                    <p>Lorem ipsum dolor sit amet, nulla neque viverra venenatis...</p>
                    <ul className="list-unstyled post-nav text-right">
                        <li><a href="#"><i className="fa fa-comment"></i> 3</a></li>
                        <li><a href="#"><i className="fa fa-heart"></i> 5</a></li>
                        <li><a href="#"><i className="fa fa-share-alt"></i> 2</a></li>
                    </ul>
                    <a href="#" className="btn btn3">read more</a>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
