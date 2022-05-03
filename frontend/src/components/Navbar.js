import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

const Navbar = ({logout,isAuthenticated}) => {
    const guestLinks = () => (
        <Fragment>

        </Fragment>
    );
   const authLinks = () => (
       <li className='nav-item'>
           <a className = 'nav-link' href='#!' onClick={logout}>Logout</a>
       </li>
   );
    return(
        <div>
            Navbar
            {isAuthenticated ? authLinks() : guestLinks()}
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps,{logout})(Navbar);