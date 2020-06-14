import Login from '../components/auth/Login';
import Register from '../components/auth/Register';

import Landing from '../components/layout/Landing';
import Dashboard from '../components/dashboard/Dashboard';
import PrivateRoute from './PrivateRoute';
import CreateProfile from '../components/dashboard/CreateProfile';
import AddEducation from '../components/dashboard/dash/AddEducation';
// import EditProfile from '../components/profile-forms/EditProfile';
import Profiles from '../components/profiles/Profiles';
import Profile from '../components/profile/Profile';
import Posts from '../components/posts/Posts';
import PostForm from '../components/posts/PostForm';
import Post from '../components/post/Post';
import NotFound from '../components/layout/NotFound';
import Alerts from '../components/layout/Alerts';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Routes = (props) => {
  return (
    <section>
      <ToastContainer />
      <Alerts />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/meet-people' component={Profiles} />
        <Route exact path='/meet-people/:id' component={Profile} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/create-profile' component={CreateProfile} />
        <PrivateRoute exact path='/blog/create-post' component={PostForm} />
        {/* <PrivateRoute exact path='/edit-profile' component={EditProfile} /> */}
        <PrivateRoute exact path='/blog/:id' component={Post} />
        <PrivateRoute exact path='/blog' component={Posts} />
        <PrivateRoute exact path='/add-education' component={AddEducation} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
