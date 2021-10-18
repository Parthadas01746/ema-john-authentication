import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../firebase/UseAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const {user,logOut} = useAuth();
    const style = {
        color:'white'
    }
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                {!user.email && <NavLink to="/login">Log in</NavLink>}
                {user.email && <button onClick={logOut}>log out</button>}
                {user.email && <span style={style}>{user?.displayName}</span>}
            </nav>
        </div>
    );
};

export default Header;