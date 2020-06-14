import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../store/profileActions';

const initialState = {
  location: '',
  status: '',
  skills: '',
  aboutme: '',
  github: '',
  twitter: '',
  facebook: '',
  linkedin: '',
  company: '',
  postion: '',
  website: '',
};

const CreateProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      for (const key in profile.social) {
        if (key in profileData) profileData[key] = profile.social[key];
      }
      if (Array.isArray(profileData.skills))
        profileData.skills = profileData.skills.join(', ');
      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    location,
    company,
    skills,
    aboutme,
    github,
    twitter,
    facebook,
    linkedin,
    postion,
    website,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, profile ? true : false);
  };
  return (
    <div className=' container section'>
      <div className='row'>
        <div className='col s12'>
          <div className='card'>
            <div className='container section'>
              <form onSubmit={onSubmit}>
                <div className='row'>
                  <h4 className='green-text center-align'>
                    Update your Profile
                  </h4>

                  <div className='input-field col s12'>
                    <i className='material-icons prefix light-blue-text darken-4'>
                      location_city
                    </i>
                    <input
                      id='company'
                      type='text'
                      className='validate'
                      placeholder='where do you work?'
                      value={company}
                      onChange={onChange}
                    />
                    <label className='active' htmlFor='company'>
                      Company
                    </label>
                  </div>
                  <div className='input-field col s12'>
                    <i className='fa fa-briefcase prefix light-blue-text darken-4' />
                    <input
                      id='postion'
                      type='text'
                      className='validate'
                      placeholder='which postion do you occupy in the Company?'
                      value={postion}
                      onChange={onChange}
                    />
                    <label className='active' htmlFor='postion'>
                      Postion
                    </label>
                  </div>
                  <div className='input-field col s12'>
                    <i className='fa fa-compass prefix light-blue-text darken-4' />
                    <input
                      id='location'
                      type='text'
                      className='validate'
                      placeholder='where do you stay?'
                      value={location}
                      onChange={onChange}
                    />
                    <label className='active' htmlFor='location'>
                      Location
                    </label>
                  </div>
                  <div className='input-field col s12'>
                    <i className='fa fa-globe prefix light-blue-text darken-4'></i>
                    <input
                      id='website'
                      type='text'
                      className='validate'
                      placeholder='Name of your Website'
                      value={website}
                      onChange={onChange}
                    />
                    <label className='active' htmlFor='location'>
                      Website
                    </label>
                  </div>
                  <div className='input-field col s12'>
                    <i className='fa fa-tasks prefix light-blue-text darken-4' />
                    <input
                      id='skills'
                      type='text'
                      className='validate'
                      value={skills}
                      onChange={onChange}
                    />
                    <label className='active' htmlFor='skills'>
                      Skills
                    </label>
                  </div>
                  <div className='input-field col s12  m6'>
                    <i className='fab fa-facebook-square prefix indigo-text darken-4' />
                    <input
                      id='facebook'
                      type='text'
                      className='validate'
                      value={facebook}
                      onChange={onChange}
                    />
                    <label className='active' htmlFor='facebook'>
                      Facebook
                    </label>
                  </div>
                  <div className='input-field col s12  m6'>
                    <i className='fab fa-github-square prefix  ' />
                    <input
                      id='github'
                      type='text'
                      className='validate'
                      value={github}
                      onChange={onChange}
                    />
                    <label className='active' htmlFor='github'>
                      GitHub
                    </label>
                  </div>
                  <div className='input-field col s12  m6'>
                    <i className='fab fa-linkedin prefix indigo-text darken-4' />
                    <input
                      id='linkedin'
                      type='text'
                      className='validate'
                      value={linkedin}
                      onChange={onChange}
                    />
                    <label className='active' htmlFor='instagram'>
                      Linkedin
                    </label>
                  </div>
                  <div className='input-field col s12  m6'>
                    <i className='fab fa-twitter-square prefix indigo-text darken-4' />
                    <input
                      id='twitter'
                      type='text'
                      className='validate'
                      value={twitter}
                      onChange={onChange}
                    />
                    <label className='active' htmlFor='twitter'>
                      Twitter
                    </label>
                  </div>
                  <div className='input-field col s12'>
                    <i className='fa fa-file-alt prefix light-blue-text darken-4' />
                    <textarea
                      id='aboutme'
                      type='email'
                      className='materialize-textarea'
                      value={aboutme}
                      onChange={onChange}
                    />
                    <label className='active' htmlFor='aboutMe'>
                      About Me
                    </label>
                  </div>
                  <div className='row center-align'>
                    <button
                      type='submit'
                      className='btn-small  waves-effect green accent-4'
                      style={{ marginRight: '10px' }}
                    >
                      Submit
                    </button>
                    <Link to='/dashboard'>
                      <button className='btn-small waves-effect red'>
                        Go Back
                      </button>
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

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.entities.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  CreateProfile
);
