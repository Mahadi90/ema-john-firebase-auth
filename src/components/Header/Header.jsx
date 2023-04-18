import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {

    const {user, logOut} = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to='/signup'>Sign UP</Link>
                <Link to="/login">Login</Link>
                {
                    user && <span className='signout-btn'>Wellcome {user.email}<button className='signout-btn' onClick={handleSignOut}>Log Out</button></span>
                }
            </div>
        </nav>
    );
};

export default Header;