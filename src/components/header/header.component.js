import React from "react";
import './header.styles.scss'
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="header">


            <div className="option">
                <Link className="option" to='/shop'>SHOP</Link>
                <Link className="option" to='/shop'>CONTACT</Link>
            </div>

        </div>
    );
};


export default Header;