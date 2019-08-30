import React, { Component } from 'react';
import Title from './Title';
import Features from './Features';

class FeaturedProducts extends Component {
    render() {
        return (

            <div className="main">
                <div className="bg"></div>
                <div className="titleWrap space-top">
                    <Title subHeading="The Best" title="Smartphones" />
                    <img src="/assets/iphone-x-outlined.svg" alt="outlined iPhoneX" />
                </div>

                <div className="featuresWrap">
                    <Features />
                </div>

            </div>
        );
    }
}

export default FeaturedProducts;