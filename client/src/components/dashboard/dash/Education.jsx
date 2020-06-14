import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteEducation } from '../../../store/profileActions';

const Education = ({ education, deleteEducation }) => {
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td className='hide-sm'>{edu.degree}</td>
      <td className='hide-sm'>{edu.fieldofstudy}</td>
      <td>
        <button
          className='btn btn-small red'
          onClick={() => deleteEducation(edu._id)}
        >
          {' '}
          DELETE
        </button>
      </td>
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

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducation })(Education);
