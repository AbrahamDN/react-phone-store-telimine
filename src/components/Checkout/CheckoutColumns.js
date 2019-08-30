import React, { Component } from 'react';

export class CheckoutColumns extends Component {
    render() {
        return (
            <div id="checkoutColumns" className="checkoutWrap">
                <div className="checkout-grid">

                    {/* Checkout-grid Column Child 1 */}
                    <div className="checkout-col">
                        <p>Product(s)</p>
                    </div>
                    {/* Checkout-grid Column Child 2 */}
                    <div className="checkout-col">
                        <p>Name</p>
                    </div>
                    {/* Checkout-grid Column Child 3 */}
                    <div className="checkout-col">
                        <p>Price</p>
                    </div>
                    {/* Checkout-grid Column Child 4 */}
                    <div className="checkout-col">
                        <p>Quantity</p>
                    </div>
                    {/* Checkout-grid Column Child 5 */}
                    <div className="checkout-col">
                        <p>Remove</p>
                    </div>

                </div>
            </div>
        );
    }
}

export default CheckoutColumns;
