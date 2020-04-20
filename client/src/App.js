import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './Pages/Home'
import AddContact from './Pages/AddContact'
import Header from './Components/Header'




class App extends React.Component {
  render(){
    return (
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Add" component={AddContact}/>
          <Route component={Home}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
