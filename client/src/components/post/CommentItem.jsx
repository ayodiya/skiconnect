import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteComment } from '../../store/postActions';

const CommentItem = ({
  postId,
  comment: { _id, text, user, date },
  auth,
  deleteComment,
}) => (
  <Fragment>
    <div className='card'>
      <div className='card-content black-text'>
        {text}
        <p id='postItemAuth' style={{ marginTop: '20px' }}>
          {' '}
          by {auth.user.name} on <Moment format='YYYY/MM/DD'>{date}</Moment>
        </p>
        {!auth.loading && user === auth.user._id && (
          <div className='card-action' style={{ marginTop: '20px' }}>
            <button
              className='btn btn-small red'
              style={{ marginRight: '20px' }}
              onClick={() => deleteComment(postId, _id)}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  </Fragment>
);

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.entities.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
