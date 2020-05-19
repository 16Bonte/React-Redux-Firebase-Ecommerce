import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/layout/Navbar'
import UserDashboard from './components/clientDashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'
import Home from './components/home/Home'
import Shop from './components/shop/Shop'
import About from './components/about/About'

import AdminDashboard from './components/adminDashboard/Dashboard'
import ProductSummary from './components/adminDashboard/ProductSummary'


let App = () => {
  return (
    <BrowserRouter>
        <NavBar />
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/boutique' component={Shop} />
          <Route exact path='/a-propos' component={About} />

          <Route exact path='/mon-compte' component={UserDashboard} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />

          <Route exact path='/admin' component={AdminDashboard} />
          <Route path='/admin/produit/:id' component={ProductSummary} />


          <Route exact path='/create' component={CreateProject} />
          <Route path='/project/:id' component={ProjectDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

