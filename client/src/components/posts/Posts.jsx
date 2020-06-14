import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PostItem from './PostItem';
import { getPosts } from '../../store/postActions';
import Pagination from './../layout/Pagination';
import { paginate } from './../../utils/paginate';

const Posts = ({ getPosts, post: { posts } }) => {
  const [pageData, setPageData] = useState({
    currentPage: 1,
  });

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const { currentPage } = pageData;

  const handlePageChange = (page) => {
    setPageData({ currentPage: page });
  };

  const pageSize = 4;
  const { length: count } = posts;
  const allpost = paginate(posts, currentPage, pageSize);

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
      <div>
        <Link to='/blog/create-post'>
          <button className='btn btn-small' style={{ marginLeft: '30px' }}>
            Post Something
          </button>
        </Link>
      </div>
      <div className='section container'>
        <div className='row '>
          <div className='col s12 m9 offset-m2'>
            {allpost.map((post) => (
              <PostItem key={post._id} post={post} />
            ))}
          </div>
        </div>
      </div>
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.entities.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
