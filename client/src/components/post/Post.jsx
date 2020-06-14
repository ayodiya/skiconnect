import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import PostView from '../post/PostView';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import { getPost } from '../../store/postActions';

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);

  return loading || post === null ? (
    <Spinner />
  ) : (
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
        <div className='section'>
          <Link to='/blog'>
            <button className='btn btn-small'>Back to Profiles</button>
          </Link>
        </div>
        <div className='row '>
          <div className='col s12 m9 offset-m2'>
            <PostView post={post} />
            <CommentForm postId={post._id} />
            <div className='comments'>
              {post.comments.map((comment) => (
                <CommentItem
                  key={comment._id}
                  comment={comment}
                  postId={post._id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.entities.post,
});

export default connect(mapStateToProps, { getPost })(Post);
