import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addEducation } from '../../../store/profileActions';

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
  });
  const { school, degree, fieldofstudy } = formData;
  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });

  const onSubmit = (e) => {
    e.preventDefault();
    addEducation(formData, history);
  };
  return (
    <div className='section container'>
      <div className='row'>
        <div className='col s12'>
          <div className='card '>
            <div className='container section'>
              <form onSubmit={(e) => onSubmit(e)}>
                <div className='row'>
                  <h4 className='green-text center-align'>Add Education</h4>
                  <div className='input-field col s12'>
                    <i className='material-icons prefix  light-blue-text darken-4'>
                      school
                    </i>
                    <input
                      id='school'
                      type='text'
                      className='validate'
                      value={school}
                      onChange={(e) => onChange(e)}
                    />
                    <label className='active' htmlFor='school'>
                      Name of School
                    </label>
                  </div>
                  <div className='input-field col s12'>
                    <i className='material-icons prefix  light-blue-text darken-4'>
                      spanner
                    </i>
                    <input
                      id='degree'
                      type='text'
                      className='validate'
                      value={degree}
                      onChange={(e) => onChange(e)}
                    />
                    <label className='active' htmlFor='degree'>
                      Degree
                    </label>
                  </div>
                  <div className='input-field col s12'>
                    <i className='material-icons prefix  light-blue-text darken-4'>
                      school
                    </i>
                    <input
                      id='fieldofstudy'
                      type='text'
                      className='validate'
                      value={fieldofstudy}
                      onChange={(e) => onChange(e)}
                    />
                    <label className='active' htmlFor='fieldofstudy'>
                      Field of Study
                    </label>
                  </div>
                  <div className='row '>
                    <button className='btn btn-small green accent-4 right'>
                      add
                    </button>
                    <Link to='/dashboard'>
                      <button
                        className='btn btn-small red right'
                        style={{ marginRight: '10px' }}
                      >
                        Go back
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

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(AddEducation);
