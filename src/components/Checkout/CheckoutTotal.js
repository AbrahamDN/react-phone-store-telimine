import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutTotal = ({ value }) => {
    const { cartSubtotal, cartTax, cartTotal, clearCart } = value;
    return (
        <React.Fragment>
            <div className="gbl-space checkout-closing">
                <div className="clearBag">
                    <Link to="">
                        <img onClick={() => { clearCart() }} src="/assets/clear.svg" alt="Clear" />
                    </Link>
                </div>
                <br />
                <div className="totals">
                    <span>Sub Total - <h4>£{cartSubtotal}</h4></span>
                    <span>Tax (0.01%) - <h4>£{cartTax}</h4></span>
                    <span>Total - <h3>£{cartTotal}</h3></span>

                    <div className="pay">
                        <button>
                            Checkout
                            <img src="/assets/checkout.svg" alt="Now" />
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CheckoutTotal;
