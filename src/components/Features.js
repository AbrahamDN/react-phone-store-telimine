import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

export default class Features extends Component {
    render() {
        return (
            <React.Fragment>
                <ProductConsumer>
                    {value => {
                        return (
                            <div className="features">
                                <div className="feature">
                                    <div className="feature-img" onClick={() => value.handleDetail(1)}>
                                        <Link to="/details">
                                            <img src="/assets/iphone-front.png" alt="Feature" />
                                        </Link>
                                    </div>
                                    <div className="feature-items">
                                        <p>iPhone Xs Max</p>
                                        <h2>£1,200</h2>
                                    </div>
                                </div>
                                <div className="feature">
                                    <div className="feature-img" onClick={() => value.handleDetail(2)}>
                                        <Link to="/details">
                                            <img src="/assets/pixel-3-front.png" alt="Feature" />
                                        </Link>
                                    </div>
                                    <div className="feature-items">
                                        <p>Google Pixel 3+</p>
                                        <h2>£600</h2>
                                    </div>
                                </div>
                                <div className="feature">
                                    <div className="feature-img" onClick={() => value.handleDetail(3)}>
                                        <Link to="/details">
                                            <img src="/assets/samsung-s10-front.png " alt="Feature" />
                                        </Link>
                                    </div>
                                    <div className="feature-items">
                                        <p>Samsung Galaxy s10+</p>
                                        <h2>£1,099</h2>
                                    </div>
                                </div>
                            </div>
                        );
                    }}
                </ProductConsumer>
                <div className="sb">
                    <Link to="/shop">
                        <h2>Shop </h2>
                        <img src="/assets/arrow-right.svg" alt="Now!" />
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}

