import React, { Fragment, useEffect } from 'react';

import { getCurrentProfile } from '../../../store/profileActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Social = ({ getCurrentProfile, profile: { profile } }) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  return (
    <Fragment>
      <div className='center-align'>
        {profile.website !== '' ? (
          <a href={profile.website} target='_blank' rel='noopener noreferrer'>
            <i className='fas fa-globe fa-3x' style={{ marginRight: '10px' }} />
          </a>
        ) : null}
        {profile.social.facebook !== '' ? (
          <a
            href={profile.social.facebook}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-facebook-square prefix indigo-text darken-4 fa-3x' />
          </a>
        ) : null}
        {profile.social.linkedin !== '' ? (
          <a
            href={profile.social.linkedin}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i
              className='fab fa-linkedin prefix indigo-text darken-4 fa-3x'
              style={{ marginLeft: '10px' }}
            />{' '}
          </a>
        ) : null}
        {profile.social.github !== '' ? (
          <a
            href={profile.social.github}
            target='_blank'
            rel='noopener noreferrer'
          >
            <i
              className='fab fa-github-square prefix black-text fa-3x '
              style={{ marginLeft: '10px' }}
            />
          </a>
        ) : null}

        {profile.social.twitter !== '' ? (
          <a
            href={profile.social.twitter}
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
    // <Fragment>
    //   <div className='center-align'>
    //     <a
    //       href={profile.website}
    //       className='tooltipped'
    //       target='_blank'
    //       rel='noopener noreferrer'
    //     >
    //       {' '}
    //       <i
    //         className='fa fa-globe  indigo-text darken-4 fa-3x '
    //         style={{ marginRight: '10px' }}
    //       />
    //     </a>
    //     <a
    //       href={profile.social.linkedin}
    //       className='tooltipped'
    //       target='_blank'
    //       rel='noopener noreferrer'
    //     >
    //       {' '}
    //       <i
    //         className='fab fa-linkedin  indigo-text darken-4 fa-3x '
    //         style={{ marginRight: '10px' }}
    //       />
    //     </a>
    //     <a
    //       href={profile.social.facebook}
    //       target='_blank'
    //       rel='noopener noreferrer'
    //     >
    //       {' '}
    //       <i className='fab fa-facebook-square  indigo-text darken-4 fa-3x' />
    //     </a>
    //     <a
    //       href={profile.social.github}
    //       target='_blank'
    //       rel='noopener noreferrer'
    //     >
    //       {' '}
    //       <i
    //         className='fab fa-github-square  black-text fa-3x '
    //         style={{ marginLeft: '10px' }}
    //       />
    //     </a>
    //     <a
    //       href={profile.social.twitter}
    //       target='_blank'
    //       rel='noopener noreferrer'
    //     >
    //       <i
    //         className='fab fa-twitter-square indigo-text darken-4 fa-3x'
    //         style={{ marginLeft: '10px' }}
    //       />
    //     </a>
    //   </div>
    // </Fragment>
  );
};

Social.propTypes = {
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.entities.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Social);
