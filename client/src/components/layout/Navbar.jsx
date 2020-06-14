import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../store/authActions';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <Fragment>
      <li>
        <Link id='navtext' to='/dashboard'>
          Dashboard
        </Link>
      </li>
      <li>
        <Link id='navtext' to='/meet-people'>
          Meet People
        </Link>
      </li>
      <li>
        <Link id='navtext' to='/blog'>
          Blog
        </Link>
      </li>
      <li>
        <Link id='navtext' onClick={logout} to='/'>
          Logout
        </Link>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link id='navtext' to='/meet-people'>
          Meet People
        </Link>
      </li>
      <li>
        <Link id='navtext' to='/login'>
          Login
        </Link>
      </li>
      <li>
        <Link id='navtext' to='/register'>
          Register
        </Link>
      </li>
    </Fragment>
  );

  return (
    <Fragment>
      <nav>
        <div className='nav-wrapper light-blue darken-4'>
          <div className='container'>
            <Link to='/' className='brand-logo'>
              SKICON
            </Link>
            <Link
              to='#!'
              className='sidenav-trigger'
              data-target='mobile-links'
            >
              <i className='material-icons'>menu</i>
            </Link>
            <ul className='right hide-on-med-and-down'>
              {!loading && (
                <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <ul className='sidenav' id='mobile-links'>
        {!loading && (
          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        )}
      </ul>
    </Fragment>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.entities.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
