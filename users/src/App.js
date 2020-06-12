import React from 'react';
import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import ViewUser from './components/users/ViewUser';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
                  <Route exact path="/users/add" component={AddUser} />
                  <Route exact path="/users/edit/:id" component={EditUser} />
                  <Route exact path="/users/view/:id" component={ViewUser} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
