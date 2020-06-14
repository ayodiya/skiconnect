import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../store/authActions';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

const Register = ({ register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, username, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error('Passwords do not match');
    } else {
      register({ name, username, email, password });
    }
  };

  //redirect if authenticated
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
                  <h4 className='green-text center-align'>REGISTER</h4>
                  <div
                    className='input-field col s12'
                    style={{ marginTop: '40px' }}
                  >
                    <i className='material-icons prefix  light-blue-text darken-4'>
                      person
                    </i>
                    <input
                      id='name'
                      type='text'
                      className='validate'
                      placeholder='first name and last name'
                      value={name}
                      onChange={(e) => onChange(e)}
                    />
                    <label className='active' htmlFor='name'>
                      Name
                    </label>
                  </div>
                  <div className='input-field col s12'>
                    <i className='material-icons prefix  light-blue-text darken-4'>
                      email
                    </i>
                    <input
                      id='email'
                      type='text'
                      className='validate'
                      placeholder='email@email.com'
                      value={email}
                      onChange={(e) => onChange(e)}
                    />
                    <label className='active' htmlFor='email'>
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
                  <div className='input-field col s12'>
                    <i className=' fa fa-user-secret prefix  light-blue-text darken-4' />
                    <input
                      id='password2'
                      type='password'
                      className='validate'
                      placeholder='Confirm Password'
                      value={password2}
                      onChange={(e) => onChange(e)}
                    />
                    <label className='active' htmlFor='password2'>
                      Password
                    </label>
                  </div>
                  <div className='center-align'>
                    <button
                      className='btn btn-small green accent-4 waves-effect'
                      type='submit'
                      style={{ marginBottom: '30px' }}
                    >
                      {' '}
                      Create Account
                    </button>
                  </div>
                  <div className='card-action right'>
                    <Link className='blue-text flow-text' to='/Login'>
                      Login
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

Register.propType = {
  register: PropTypes.func.isRequired,

  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.entities.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(Register);
