import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const [menu, setMenu] = useState(false);
    const [show, setShow] = useState(false);
    const toggle = () => {
        setMenu(!menu);
        setShow(!show);
    };
    const lists = () => {
        return <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/shop">Shop</Link>
            </li>
        </ul>;
    };

    return (
        <nav className="gbl-space">
            <div>
                <span onClick={toggle} className={show ? "showMenu burgerMenu" : "showMenu"}>
                    <img src={menu ? '/assets/x-menu.svg' : '/assets/menu.svg'} alt="Menu" />
                    <div className="burgerMenuList">
                        {lists()}
                    </div>
                </span>
                <span className="defaultMenu">
                    {lists()}
                </span>
            </div>
            <div className="logo">
                <Link to="/">
                    <span>TeliMine</span>
                    <img src="/assets/logo.svg" alt="logo" />
                </Link>
            </div>
            <div className="checkout">
                <Link to="/checkout">
                    <img src="/assets/shopBag.svg" alt="shopping bag" />
                </Link>
            </div>
        </nav >
    );
}

export default Nav;

