import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='page-footer light-blue darken-4'>
      <div className='container '>
        <div className='row'>
          <div className='col l6 s12'>
            <h3 className='white-text'>SKICON</h3>
            <p className='grey-text text-lighten-4 flow-text'>
              You can contact the developer on any of the following Platforms
            </p>
          </div>
          <div className='col l4 offset-l2 s12'>
            <h5 className='white-text'>Links</h5>
            <ul>
              <li>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className='grey-text text-lighten-3'
                  href='https://www.facebook/oludiya'
                >
                  <i className='fab fa-facebook-square fa-4x' />
                </a>
              </li>
              <li>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className='grey-text text-lighten-3'
                  href='https://www.twitter.com/ayodiyah'
                >
                  <i className='fab fa-twitter-square fa-4x' />
                </a>
              </li>
              <li>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className='grey-text text-lighten-3'
                  href='https://www.linkedin.com/in/ayodiyah'
                >
                  <i className='fab fa-linkedin fa-4x' />
                </a>
              </li>
              <li>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className='grey-text text-lighten-3'
                  href='mailto:devayodiya@gmail.com'
                >
                  <i className='fab fa-google fa-4x' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-copyright'>
        <div className='container'>© 2019 ayodiya</div>
      </div>
    </footer>
  );
};

export default Footer;
