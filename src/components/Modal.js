import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { modalOpen, closeModal } = value;
                    const { img, title, price } = value.modalProduct;

                    if (!modalOpen) return null;
                    else {
                        return (<div className="modal-container">

                            <div className="close-modal" onClick={() => closeModal()}></div>

                            <div className="modal">
                                <div>
                                    <Link onClick={() => closeModal()} to="/checkout">
                                        <img src={img} alt="product" />
                                    </Link>
                                </div>
                                <div>
                                    <img src="/assets/x-menu.svg" alt="close" onClick={() => closeModal()} />
                                    <h3>Added to shopping bag</h3>
                                    <h1>{title}</h1>
                                    <h3>
                                        Price £{price}
                                    </h3>
                                    <br />
                                    <Link onClick={() => closeModal()} to="/checkout" className="modal-c">
                                        <p>Checkout</p>
                                        <img src="/assets/checkout.svg" alt="→" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        );
                    }
                }}
            </ProductConsumer>
        );
    }
}

export default Modal;