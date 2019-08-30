import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './css/App.css';
import './css/Responsive.css';
import Details from './components/Details';
import Nav from './components/Nav';
import ProductList from './components/ProductList';
import Checkout from './components/Checkout';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';
import Default from './components/Default';
import Modal from './components/Modal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Modal />
        <Switch>
          <Route path="/" exact component={FeaturedProducts} />
          <Route path="/details" component={Details} />
          <Route path="/shop" component={ProductList} />
          <Route path="/checkout" component={Checkout} />
          <Route component={Default} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
