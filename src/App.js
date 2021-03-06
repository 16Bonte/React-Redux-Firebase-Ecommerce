import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/layout/Navbar'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Home from './components/home/Home'
import Shop from './components/shop/Shop'
import About from './components/about/About'
import AdminDashboard from './components/adminDashboard/Dashboard'
import Cart from './components/cart/Cart'
// import Nav from './components/layout/Nav'


let App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/boutique' component={Shop} />
          <Route exact path='/pannier' component={Cart} />
          <Route exact path='/a-propos' component={About} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/admin' component={AdminDashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

