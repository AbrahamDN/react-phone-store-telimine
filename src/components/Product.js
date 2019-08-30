import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';

export default class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <React.Fragment>
                <div className="product">
                    <ProductConsumer>
                        {value => {
                            return (
                                <div className="img-container"
                                    onClick={() => value.handleDetail(id)}>
                                    <Link to="/details">
                                        <img src={img} alt="product" />
                                    </Link>
                                    <button className={inCart ? "addBag inBag" : "addBag"} disabled={inCart ? true : false} onClick={() => {
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}>
                                        <img src={inCart ? "/assets/inBag.svg" : "/assets/addBag.svg"} alt="Add to Bag" />
                                    </button>
                                </div>
                            );
                        }}
                    </ProductConsumer>
                    <div className="product-items">
                        <p>{title}</p>
                        <h3>£{price}</h3>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
};
