import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../store/postActions';

const PostView = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, title, username, user, likes, date },
}) => {
  return (
    <Fragment>
      <div className='card'>
        <div className='card-content black-text'>
          <p id='PostViewAuth'>
            {' '}
            Posted on <Moment format='YYYY/MM/DD'>{date}</Moment> by{' '}
            <Link to={`/profile/${user}`}>{username}</Link>
          </p>
          <h3 className='center-align' id='postTitle'>
            {title}
          </h3>
          <p className='center-align'>{text}</p>
        </div>
        <div className='card-action' style={{ marginTop: '20px' }}>
          {/* <button
            className='btn btn-small'
            onClick={() => addLike(_id)}
            style={{ marginRight: '20px' }}
          >
            <i className=' fa fa-thumbs-up'></i>{' '}
            <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
          </button>
          <button
            className='btn btn-small red'
            onClick={() => removeLike(_id)}
            style={{ marginRight: '20px' }}
          >
            <i className=' fa fa-thumbs-down'></i>
          </button> */}
          {!auth.loading && user === auth.user._id && (
            <button
              onClick={() => deletePost(_id)}
              type='button'
              className='btn btn-small red'
            >
              DELETE POST
            </button>
          )}
        </div>
      </div>
    </Fragment>
  );
};

PostView.defaultProps = {
  showActions: true,
};

PostView.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  auth: state.entities.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostView
);
