import React from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';

import MyProvider from './MyProvider';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import ProductsList from './components/ProductsList';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import Loader from './components/Loader';
import Receipt from './components/Receipt';

function App() {
  return (
    <MyProvider>
      <NavBar />
      <main>
        <Loader />
        <Switch>
          <Route path="/receipt" component={Receipt} />
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/cart" component={Cart} />
          <Route path="/" component={ProductsList} />
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </main>
    </MyProvider>
  );
}

export default App;
