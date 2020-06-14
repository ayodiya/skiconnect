import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../store/postActions';
import { Link } from 'react-router-dom';

const intialState = {
  title: '',
  text: '',
};

const PostForm = ({ addPost }) => {
  const [formData, setFormData] = useState(intialState);

  const { title, text } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    addPost(formData);
  };

  return (
    <Fragment>
      <footer className='page-footer light-blue darken-4'>
        <div className='container '>
          <div className='row'>
            <div className='col s12 m6  offset-m3 center-align'>
              <h3 className='white-text'>BLOG</h3>
              <p className='grey-text text-lighten-4 flow-text'>
                Read posts by members of the Community
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className='section container'>
        <div className='row '>
          <h3 className='center-align'>Express Yourself</h3>
          <div className='col s12'>
            <div className='card'>
              <div className='card-content'>
                <form onSubmit={onSubmit}>
                  <div className='row'>
                    <div className='input-field col s12 '>
                      <input
                        id='title'
                        type='text'
                        className='validate'
                        placeholder='Post Title'
                        value={title}
                        onChange={onChange}
                      />
                      <label className='active' htmlFor='title'>
                        Title
                      </label>
                    </div>
                    <div className='input-field col s12'>
                      <textarea
                        id='text'
                        type='text'
                        className='materialize-textarea'
                        value={text}
                        onChange={onChange}
                      />
                      <label className='active' htmlFor='text'>
                        Express yourself
                      </label>
                    </div>
                    <div className='center-align' style={{ marginTop: '20px' }}>
                      <button
                        className='btn btn-small  green accent-4 waves-effect'
                        style={{ marginRight: '20px' }}
                      >
                        {' '}
                        Submit
                      </button>
                      <Link to='/blog'>
                        <button className='btn btn-small  red'>Back</button>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
