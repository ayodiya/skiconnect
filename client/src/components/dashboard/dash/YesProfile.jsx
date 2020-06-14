import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  getCurrentProfile,
  deleteAccount,
} from '../../../store/profileActions';
import About from '../dash/About';
import Education from '../dash/Education';
import PropTypes from 'prop-types';
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

// Modal.setAppElement('#yourAppElement');
Modal.setAppElement('#root');

const YesProfile = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile },
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <div className=' section container'>
      <div className='row'>
        <div className='col s12'>
          <div className='card '>
            <About />
            <Education education={profile.education} />
            <div className='center-align'>
              <button
                id='deleteModal'
                className='btn btn-small modal-trigger red'
                style={{ margin: '30px' }}
                onClick={openModal}
              >
                DELETE ACCOUNT
              </button>

              <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel='Example Modal'
              >
                <div className='center-align'>
                  <h4 className='red-text'>
                    ARE YOU SURE YOU WANT TO DELETE YOUR ACCOUNT PERMANENTLY ?
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
            );
          </div>
        </div>
      </div>
    </div>
  );
};

YesProfile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.entities.auth,
  profile: state.entities.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  YesProfile
);
