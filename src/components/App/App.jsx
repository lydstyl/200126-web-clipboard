import React from 'react';
import { createStore, StoreProvider } from 'easy-peasy';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import storeModel from '../../store';

import Header from '../Header/Header';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Landing from '../Landing/Landing';
import Unauthorized from '../Unauthorized/Unauthorized';
import Login from '../Login/Login';
import Dashboard from '../Dashboard/Dashboard';
import Footer from '../Footer/Footer';

import StyledAppWrapper from './StyledAppWrapper';
import StyledContainer from './style';

const store = createStore(storeModel);

function App() {
  return (
    <StyledAppWrapper>
      <StoreProvider store={store}>
        <Router>
          <Header />
          <StyledContainer>
            <Route exact path='/' render={props => <Landing {...props} />} />
            <Route exact path='/unauthorized' component={Unauthorized} />
            <Route exact path='/login' component={Login} />
            <ProtectedRoute exact path='/dashboard' component={Dashboard} />
          </StyledContainer>
        </Router>
        <Footer />
      </StoreProvider>
    </StyledAppWrapper>
  );
}

export default App;
