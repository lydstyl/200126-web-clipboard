import React from 'react';
import { createStore, StoreProvider } from 'easy-peasy';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import storeModel from '../../storeModel';

import Header from '../Header/Header';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Landing from '../Landing/Landing';
import Unauthorized from '../Unauthorized/Unauthorized';
import Dashboard from '../Dashboard/Dashboard';
import Footer from '../Footer/Footer';

const store = createStore(storeModel);

function App() {
  return (
    <StoreProvider store={store}>
      <Header />
      <Router>
        <Route exact path='/' render={props => <Landing {...props} />} />
        <Route exact path='/unauthorized' component={Unauthorized} />
        <ProtectedRoute exact path='/dashboard' component={Dashboard} />
      </Router>
      <Footer />
    </StoreProvider>
  );
}

export default App;
