import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './Pages/Home'
import AddContact from './Pages/AddContact'
import Resume from "./Pages/Resume"
import Header from './Components/Header'




class App extends React.Component {
  render(){
    return (
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/AddContact" component={AddContact}/>
          <Route exact path="/Resume" component={Resume}/>
          <Route component={Home}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
