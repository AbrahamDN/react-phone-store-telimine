import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

export class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { id, company, img, info, price, title, inCart } = value.detailProduct;

          const returnBtn = () => {
            return (
              <Link to="/shop" className="backBtn">
                <img src="/assets/arrow-right.svg" alt="←" />
                Back to shop
              </Link>
            );
          }

          return (
            <div className="main details-container">
              {returnBtn()}
              <br />
              <div className="details">
                <div className="details-gallery">
                  <button className={inCart ? "addBag inBag" : "addBag"} disabled={inCart ? true : false} onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}>
                    <img src={inCart ? "/assets/inBag.svg" : "/assets/addBag.svg"} alt="Add to Bag" />
                  </button>
                  <div className="main-img">
                    <img src={img} alt={title + 'image'} />
                  </div>
                </div>
                <div className="details-info">
                  <h1>{title}</h1>
                  <h2>Price: £{price}</h2>
                  <br />
                  <i>
                    <h3>Brand: {company}</h3>
                    <h4>About the product</h4>
                    <p>
                      {info}
                    </p>
                  </i>
                  <br />
                  <span>
                    {returnBtn()}
                    <button disabled={inCart ? true : false} onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                      className={inCart ? "btnDisabled" : ""}>
                      {inCart ? "In the Bag" : "Add to Bag"}
                    </button>
                  </span>
                </div>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
