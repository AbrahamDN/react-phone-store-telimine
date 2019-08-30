import React from 'react';

const BagItem = ({ item, value }) => {
    const { id, title, img, total, count } = item;
    const { increment, removeItem } = value;
    return (
        <div className="checkoutWrap">
            <div className="checkout-grid">

                {/* Checkout-grid Column Child 1 */}
                <div className="checkout-col">
                    <img src={img} alt={title} />
                </div>
                {/* Checkout-grid Column Child 2 */}
                <div className="checkout-col">
                    <h3>{title}</h3>
                </div>
                {/* Checkout-grid Column Child 3 */}
                <div className="checkout-col">
                    <p>£{total}</p>
                </div>
                {/* Checkout-grid Column Child 4 */}
                <div className="checkout-col quantity">
                    <span onClick={() => increment(id, 'increment')}>
                        <img src="/assets/increase.svg" alt="increase" />
                    </span>
                    <p>{count}</p>
                    <span onClick={() => increment(id, 'decrement')}>
                        <img src="/assets/decrease.svg" alt="Decrease" />
                    </span>
                </div>
                {/* Checkout-grid Column Child 5 */}
                <div className="checkout-col">
                    <img onClick={() => removeItem(id)} className="trash" src="/assets/trash.svg" alt="Remove" />
                </div>

            </div>
        </div>
    );
}

export default BagItem;
