import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileAbout from './ProfileAbout';
import ProfileEducation from './ProfileEducation';
import { getProfileById, deleteAccount } from '../../store/profileActions';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Profile = ({
  getProfileById,
  deleteAccount,
  profile: { profile },
  auth,
  match,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <Fragment>
      {profile === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className=' section container'>
            <div className='row'>
              <div className='col s12'>
                <div className='card'>
                  <ProfileAbout profile={profile} />

                  {profile.education.length > 0 ? (
                    <Fragment>
                      <ProfileEducation education={profile.education} />
                      ))}
                    </Fragment>
                  ) : (
                    <div className='section'>
                      <h5 className='center-align'>No education credentials</h5>{' '}
                    </div>
                  )}

                  <div className='center-align'>
                    {auth.isAuthenticated &&
                      auth.loading === false &&
                      auth.user._id === profile.user._id && (
                        <button
                          id='deleteModal'
                          className='btn btn-small modal-trigger red'
                          style={{ margin: '30px' }}
                          onClick={openModal}
                        >
                          DELETE ACCOUNT
                        </button>
                      )}
                    <Modal
                      isOpen={modalIsOpen}
                      // onAfterOpen={afterOpenModal}
                      onRequestClose={closeModal}
                      style={customStyles}
                      contentLabel='Example Modal'
                    >
                      <div className='center-align'>
                        <h4 className='red-text'>
                          ARE YOU SURE YOU WANT TO DELETE YOUR ACCOUNT
                          PERMANENTLY ?
                        </h4>
                        <button
                          className='btn btn-small red'
                          onClick={() => deleteAccount()}
                        >
                          YES
                        </button>
                        <button
                          className='btn btn-small green'
                          style={{ marginLeft: '10px' }}
                          onClick={closeModal}
                        >
                          NO
                        </button>
                      </div>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.entities.profile,
  auth: state.entities.auth,
});

export default connect(mapStateToProps, { getProfileById, deleteAccount })(
  Profile
);
