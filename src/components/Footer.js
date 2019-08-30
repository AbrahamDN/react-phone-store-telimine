import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer className="gbl-space">
                <div className="ft-wrap">
                    <form action="">
                        <label htmlFor="email">
                            <input aria-label="Submit" type="submit" value="" />
                            <input aria-label="Email" type="text" placeholder="Subscribe for offers/ discounts" />
                        </label>
                    </form>
                    <div className="pay-methods">
                        <img src="/assets/paypal-ft.svg" alt="PayPal" />
                        <img src="/assets/visa-ft.svg" alt="Visa" />
                        <img src="/assets/masterCard-ft.svg" alt="Master Card" />
                    </div>
                    <div className="legal-info">
                        <ul>
                            <li>
                                <Link to="">Terms of Conditions</Link>
                            </li>
                            <li>
                                <Link to="">Delivery</Link>
                            </li>
                            <li>
                                <Link to="">Refunds</Link>
                            </li>
                            <li>
                                <Link to="">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <p className="ft-copy">
                        Copyright © 2019 TeliMine. All rights reserved
                     </p>
                    <p className="ft-credit">
                        Made by <a href="http://abrahamdn.com" target="_blank" rel="noopener noreferrer"> AbrahamDN</a>
                    </p>
                </div>
            </footer>
        );
    }
}

export default Footer;