import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../store/postActions';

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');

  return (
    <Fragment>
      <div className='card'>
        <div className='card-content'>
          <p className='center-align flow-text'>Comment on Post</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addComment(postId, { text });
              setText('');
            }}
          >
            <div className='row'>
              <div className='input-field col s12'>
                <textarea
                  id='comment'
                  type='text'
                  className='materialize-textarea'
                  onChange={(e) => setText(e.target.value)}
                  required
                />
                <label className='active' htmlFor='comment'>
                  Express yourself
                </label>
              </div>
            </div>

            <button
              className='btn btn-small'
              type='submit'
              style={{ marginRight: '20px' }}
            >
              {' '}
              Submit
            </button>
            <button className='btn btn-small  red'>Back</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
