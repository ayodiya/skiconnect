import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfiles } from './../../store/profileActions';
import ProfileItem from './ProfileItem';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <Fragment>
      <footer className='page-footer light-blue darken-4'>
        <div className='container '>
          <div className='row'>
            <div className='col s12 m6  offset-m3 center-align'>
              <h3 className='white-text'>MEET PEOPLE</h3>
              <p className='grey-text text-lighten-4 flow-text'>
                Connect with other members of the Community
              </p>
            </div>
          </div>
        </div>
      </footer>
      >
      <div className='container'>
        <div className='row'>
          {profiles.length > 0 ? (
            profiles.map((profile) => (
              <ProfileItem key={profile._id} profile={profile} />
            ))
          ) : (
            <h2 className='text-center'> No Profiles Found</h2>
          )}
        </div>
      </div>
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.entities.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
