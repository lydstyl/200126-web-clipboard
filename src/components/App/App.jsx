import React from 'react';
import { createStore, StoreProvider } from 'easy-peasy';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import storeModel from '../../store';

import Header from '../Header/Header';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Landing from '../Landing/Landing';
import Unauthorized from '../Unauthorized/Unauthorized';
import Dashboard from '../Dashboard/Dashboard';
import Footer from '../Footer/Footer';

import StyledAppWrapper from './StyledAppWrapper';
import StyledContainer from './style';

const store = createStore(storeModel);

function App() {
  return (
    <StyledAppWrapper>
      <StoreProvider store={store}>
        <Header />
        <StyledContainer>
          <Router>
            <Route exact path='/' render={props => <Landing {...props} />} />
            <Route exact path='/unauthorized' component={Unauthorized} />
            <ProtectedRoute exact path='/dashboard' component={Dashboard} />
          </Router>
        </StyledContainer>
        <Footer />
      </StoreProvider>
    </StyledAppWrapper>
  );
}

export default App;
