import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import christian from '../../Img/christian.jpg';

const About = ({
  auth: { user, isAuthenticated, loading },
  profile: { skills, aboutme, website, postion, company, social, name, _id },
}) => {
  return (
    <Fragment>
      <div className='row'>
        <Link to='/meet-people'>
          <button
            className='btn btn-small section s12 m2 left'
            style={{ margin: '10px' }}
          >
            back to Profiles
          </button>
        </Link>

        {isAuthenticated && loading === false && user._id === _id && (
          <Fragment>
            <Link to='/add-education'>
              <button
                className=' btn btn-small section s12 m2 right'
                style={{ margin: '10px' }}
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
          </Fragment>
        )}
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
            <h5 className='center-align'> {name}</h5>
            <span className='center-align'>
              {postion} at {company}
            </span>
            <div style={{ marginTop: '30px' }}>
              {skills.map((skill) => (
                <div key={skill} className='chip '>
                  {skill}
                </div>
              ))}
            </div>
            {/* SOCIAL MEDIA */}
            <Fragment>
              <div className='center-align'>
                {website !== '' ? (
                  <a href={website} target='_blank' rel='noopener noreferrer'>
                    <i
                      className='fas fa-globe fa-3x'
                      style={{ marginRight: '10px' }}
                    />
                  </a>
                ) : null}
                {social.facebook !== '' ? (
                  <a
                    href={social.facebook}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='fab fa-facebook-square prefix indigo-text darken-4 fa-3x' />
                  </a>
                ) : null}
                {social.linkedin !== '' ? (
                  <a
                    href={social.linkedin}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i
                      className='fab fa-linkedin prefix indigo-text darken-4 fa-3x'
                      style={{ marginLeft: '10px' }}
                    />{' '}
                  </a>
                ) : null}
                {social.github !== '' ? (
                  <a
                    href={social.github}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i
                      className='fab fa-github-square prefix fa-3x '
                      style={{ marginLeft: '10px' }}
                    />
                  </a>
                ) : null}

                {social.twitter !== '' ? (
                  <a
                    href={social.twitter}
                    target='_blank'
                    rel='noopener  noreferrer'
                  >
                    <i
                      className='fab fa-twitter-square prefix indigo-text darken-4 fa-3x'
                      style={{ marginLeft: '10px' }}
                    />
                  </a>
                ) : null}
              </div>
            </Fragment>
            <h5>About Me</h5>
            <hr style={{ width: '10%' }}></hr>
            <div className='row'>
              <div className='col s6  offset-m3'>
                <p> {aboutme}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

About.propTypes = {
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.entities.auth,
});

export default connect(mapStateToProps)(About);
