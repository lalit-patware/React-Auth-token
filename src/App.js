import React ,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from './components/LoginPage'
import LogoutPage from './components/LogoutPage'
import AdminPage from './components/AdminPage'
 
class App extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Router>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/logout" component={LogoutPage} />
            <Route path="/admin" component={AdminPage} />
          </Switch>
      </Router>
    );
  }
 
}

export default App;
