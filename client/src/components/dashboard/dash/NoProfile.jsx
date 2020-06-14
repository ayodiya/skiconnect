import React from 'react';
import { Link } from 'react-router-dom';

const NoProfile = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col s12 m6 offset-m3'>
          <div className='card ' style={{ margin: '75px' }}>
            <div className='card-content center-align'>
              <p className='flow-text text-accent-3'>
                You do not have a Profile yet
              </p>
              <Link to='/create-profile'>
                <button
                  className='btn btn-small  waves-effect green accent-4 '
                  style={{ marginTop: '10px' }}
                >
                  {' '}
                  Create your Profile
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoProfile;
