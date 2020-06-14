import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import christian from '../../../Img/christian.jpg';
import Social from './Social';
import { getCurrentProfile } from '../../../store/profileActions';

const About = ({ getCurrentProfile, auth: { user }, profile: { profile } }) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <Fragment>
      <div className='row'>
        <Link to='/add-education'>
          <button
            className=' btn btn-small section s12 m2 right'
            style={{ margin: '10px', marginRight: '20px' }}
          >
            Add Education
          </button>
        </Link>
        <Link to='/create-profile'>
          <button
            className=' btn btn-small section s12 m2 right'
            style={{ margin: '10px' }}
          >
            Edit Profile
          </button>
        </Link>
      </div>
      <div>
        <div className='section'>
          <div className='center-align'>
            <img
              id='profileImg'
              alt='profile'
              src={christian}
              className='responsive-img'
            />
          </div>
          <div className='center-align'>
            <h5 className='center-align'> {user && user.name}</h5>
            <span className='center-align'>
              {profile.postion} at {profile.company}
            </span>

            <div style={{ marginTop: '20px', marginBottom: '20px' }}>
              {profile.skills.map((skill) => (
                <div key={skill} className='chip '>
                  {skill}
                </div>
              ))}
            </div>
            <Social />
            <h4>About Me</h4>
            <hr style={{ width: '10%' }}></hr>
            <div className='row'>
              <div className='col s6  offset-m3'>
                <p> {profile.aboutme}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

About.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.entities.auth,
  profile: state.entities.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(About);
