import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/authActions';
import { connect } from 'react-redux';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  // redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <div className='container section'>
      <div className='row'>
        <div className='col s12 m7 offset-m3'>
          <div className='card'>
            <div className='container section'>
              <form onSubmit={(e) => onSubmit(e)}>
                <div className='row'>
                  <h4 className='green-text center-align'>Login</h4>
                  <div
                    className='input-field col s12'
                    style={{ marginTop: '40px' }}
                  >
                    <i className='material-icons prefix  light-blue-text darken-4'>
                      email
                    </i>
                    <input
                      id='email'
                      type='text'
                      className='validate'
                      placeholder='first name and last name'
                      value={email}
                      onChange={(e) => onChange(e)}
                    />
                    <label className='active' htmlFor='name'>
                      Email
                    </label>
                  </div>

                  <div className='input-field col s12'>
                    <i className=' fa fa-user-secret prefix  light-blue-text darken-4' />

                    <input
                      id='password'
                      type='password'
                      className='validate'
                      value={password}
                      onChange={(e) => onChange(e)}
                    />
                    <label className='active' htmlFor='password'>
                      Password
                    </label>
                  </div>

                  <div className='center-align'>
                    <button
                      className='btn btn-small green accent-4 waves-effect'
                      type='submit'
                      style={{ marginBottom: '30px' }}
                    >
                      LOGIN
                    </button>
                  </div>
                  <div className='card-action right'>
                    <Link className='blue-text flow-text' to='/register'>
                      REGISTER
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.PropType = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.entities.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
