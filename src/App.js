import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, ProductList, Details, Cart, Default, Modal,Landing } from './components/index';

function App() {
  return (
      <React.Fragment>
          <Navbar />
          <Switch>
              <Route exact path="/" component={ Landing }></Route>
              <Route exact path="/products" component={ ProductList }></Route>
              <Route path="/details" component={ Details }></Route>
              <Route path="/cart" component={ Cart }></Route>
              <Route component={ Default }></Route>
          </Switch>
          <Modal />
      </React.Fragment>
  );
}

export default App;
