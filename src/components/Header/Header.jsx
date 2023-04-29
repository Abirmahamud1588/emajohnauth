import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthPorviders';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogout =() =>{
        logOut()
        .then(result => {})
        .catch(error =>{
            console.log(error.message)
        })
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign UP</Link>
                {
                    user && <span style={{color:'white', margin:'0px 20px'}}>HI {user.email}
                    <button onClick={handleLogout}>Logout</button>
                    </span>
                }
            </div>
        </nav>
    );
};

export default Header;