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

import AddCategory from './components/adminDashboard/AddCategory'
import AddProduct from './components/adminDashboard/AddProduct'
import AdminDashboard from './components/adminDashboard/Dashboard'
import ProductList from './components/adminDashboard/ListProducts'
import CategoryList from './components/adminDashboard/ListCategories'


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
          <Route exact path='/admin/ajouter-categorie' component={AddCategory} />
          <Route exact path='/admin/ajouter-produit' component={AddProduct} />
          <Route exact path='/admin/produits' component={ProductList} />
          <Route exact path='/admin/categories' component={CategoryList} />


          <Route exact path='/create' component={CreateProject} />
          <Route path='/project/:id' component={ProjectDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

