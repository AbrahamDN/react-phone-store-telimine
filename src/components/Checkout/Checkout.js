import React, { Component } from 'react';
import CheckoutColumns from './CheckoutColumns';
import EmptyBag from './EmptyBag';
import { ProductConsumer } from '../../context';
import BagList from './BagList';
import CheckoutTotal from './CheckoutTotal';

class Checkout extends Component {
    render() {
        return (
            <section id="checkout">

                <ProductConsumer>
                    {value => {
                        const { cart } = value;

                        if (cart.length > 0) {
                            return (
                                <React.Fragment>
                                    <div className="checkout-banner">
                                        <h1>Shopping Bag</h1>
                                        <h3>
                                            {cart.length}
                                            {cart.length > 0 ? ' Items' : ' Item'}
                                        </h3>
                                    </div>
                                    <CheckoutColumns />
                                    <BagList value={value} />
                                    <CheckoutTotal value={value} />
                                </React.Fragment>
                            )
                        } else {
                            return (
                                <EmptyBag />
                            )
                        }
                    }}
                </ProductConsumer>

            </section>
        );
    }
}

export default Checkout;