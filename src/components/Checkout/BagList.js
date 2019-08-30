import React from 'react';
import BagItem from './BagItem';

const BagList = ({ value }) => {
    const { cart } = value;
    return (
        <div>
            {cart.map(item => {
                return (<BagItem key={item.id} item={item} value={value} />);
            })}
        </div>
    );
}

export default BagList;
