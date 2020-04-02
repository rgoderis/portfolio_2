import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './Pages/Home'




class App extends React.Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
