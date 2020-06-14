import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import configureStore from './store/configureStore';
import { loadUser } from './store/authActions';
import { Provider } from 'react-redux';
import setAuthToken from './store/utils/setAuthToken';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Routes from './routing/Routes';
import M from 'materialize-css';

const store = configureStore();

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
    M.AutoInit();
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route component={Routes} />
          </Switch>

          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
