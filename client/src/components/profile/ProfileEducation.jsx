import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteEducation } from '../../store/profileActions';

const ProfileEducation = ({ profile: { profile }, education, auth }) => {
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td className='hide-sm'>{edu.degree}</td>
      <td className='hide-sm'>{edu.fieldofstudy}</td>
      {auth.isAuthenticated &&
        auth.loading === false &&
        auth.user._id === profile._id && (
          <td>
            <button
              className='btn btn-small red'
              onClick={() => deleteEducation(edu._id)}
            >
              {' '}
              DELETE
            </button>
          </td>
        )}
    </tr>
  ));
  return (
    <Fragment>
      <div className='row center-align'>
        <h4> Education</h4>
        <hr style={{ width: '12%' }}></hr>
        <div className='container'>
          <table className='striped'>
            <thead>
              <tr>
                <th>School</th>
                <th>Degree</th>
                <th>Course</th>
              </tr>
            </thead>

            <tbody>{educations}</tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.entities.auth,
  profile: state.entities.profile,
});

export default connect(mapStateToProps, { deleteEducation })(ProfileEducation);
