import React from 'react';
import { Component } from 'react';
import Title from './Title';
import Product from './Product';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="space-top">
                    <Title subHeading="Browse" title=" products" />
                </div>
                <div className="products">
                    <ProductConsumer>
                        {value => {
                            return value.products.map((product) => {
                                return <Product key={product.id} product={product} />
                            });
                        }}
                    </ProductConsumer>
                </div>
            </React.Fragment >
        );
    }
}
