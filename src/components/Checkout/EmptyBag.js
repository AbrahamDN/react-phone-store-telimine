import React from 'react';
import { Link } from 'react-router-dom';

const EmptyBag = () => {
    return (
        <div className="center-xy">
            <img src="/assets/sad.svg" alt=":(" />
            <br />
            <br />
            <h1>Your shopping bag is completely Empty!</h1>
            <h3>Go Shop and find products.</h3>
            <br />
            <Link to="/shop">
                <button>
                    Find products
            </button>
            </Link>
        </div>
    )
}

export default EmptyBag;
