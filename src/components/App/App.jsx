import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import AddBoxer from '../AddBoxer/AddBoxer';
import DeleteBoxer from '../DeleteBoxer/DeleteBoxer';
import SearchFighters from '../SearchFighters/SearchFighters'
import Result from '../ResultOfTheSearch/Result';
import RequestTheMatch from '../RequestTheMatch/RequestTheMatch';
import EditBoxer from '../DeleteBoxer/EditBoxer'

import './App.css';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  // const darkTheme = createTheme({
  //   palette: {
  //     mode: 'dark',
  //   },
  // });

  

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
        {/* <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    </ThemeProvider> */}
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          {/* Route for adding boxers */}
          <Route path="/addBoxer" exact>
            <AddBoxer />
          </Route>

          {/* Route for deleting boxers */}
          <Route path="/deleteBoxer" exact>
            <DeleteBoxer />
          </Route>

          {/* Route for searching boxers */}
          <Route path="/searchFighters" exact>
            <SearchFighters />
          </Route>

          {/* Route for the result of the search*/}
          <Route path='/result' exact>
            <Result />
          </Route>

          {/* Route for Requesting matches*/}
          <Route path='/request' exact>
            <RequestTheMatch />
          </Route>

          {/* Route for the Edit boxers/members Form */}
          <Route path="/edit" exact>
            <EditBoxer />
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
