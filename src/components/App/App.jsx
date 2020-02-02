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

const store = createStore(storeModel);

const style = { width: '90%', margin: 'auto', backgroundColor: 'lightGrey' };

function App() {
  return (
    <StoreProvider store={store}>
      <Header />
      <div className='container' style={style}>
        <Router>
          <Route exact path='/' render={props => <Landing {...props} />} />
          <Route exact path='/unauthorized' component={Unauthorized} />
          <ProtectedRoute exact path='/dashboard' component={Dashboard} />
        </Router>
      </div>
      <Footer />
    </StoreProvider>
  );
}

export default App;
