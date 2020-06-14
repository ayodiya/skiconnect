import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import christian from '../../Img/christian.jpg';

const ProfileItem = ({ profile: { _id, name, location, skills } }) => {
  return (
    <Fragment>
      <div className='col s12 m4'>
        <div className='card'>
          <div className='card-image'>
            <img alt='me' src={christian} />
            <span id='cardtitle' className='card-content'>
              {' '}
              {name}
            </span>
          </div>
          <div className='card-content'>
            <div>
              {skills.slice(0, 3).map((skills, index) => (
                <div key={skills} className='chip'>
                  {skills}
                </div>
              ))}
            </div>
            <div id='location' style={{ marginTop: '10px' }}>
              {location}
            </div>
            <Link to={`/meet-people/${_id}`} style={{ marginTop: '20px' }}>
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </Fragment>

    // <Fragment>
    //   <Col lg='4'>
    //     <Card className='card-lift--hover shadow border-0 mb-3'>
    //       <CardBody className='py-5'>
    //         <div className='icon icon-shape icon-shape-primary rounded-circle mb-4'>
    //           <i className='ni ni-check-bold' />
    //         </div>
    //         <h6 className='text-primary text-uppercase'>{username}</h6>
    //         <p className='description mt-3'>{company}</p>
    //         <p className='description mt-3'>{location}</p>
    //         <div>
    //           {skills.slice(0, 4).map((skills, index) => (
    //             <Badge color='success' pill className='mr-1'>
    //               {skills}
    //             </Badge>
    //           ))}
    //         </div>
    //         <Link to={`/profile/${_id}`}>
    //           <Button
    //             className='mt-4'
    //             color='primary'
    //             // href='#pablo'
    //             // onClick={(e) => e.preventDefault()}
    //           >
    //             View Profile
    //           </Button>
    //         </Link>
    //       </CardBody>
    //     </Card>
    //   </Col>
    // </Fragment>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
