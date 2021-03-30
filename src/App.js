import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import Form from './Components/Form/Form';
import List from './Components/List/List';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import React from 'react';

class  App extends React.Component {
  constructor(){
    super();
    this.state={details:[0,0,0,0],
                form_detail:[]
              }
  }
  handle=(val,arr)=>{
    this.setState({details:val,form_detail:arr})
  }
  render(){
    console.log(this.state)
  return (
    <div className="main">
    <Router>
      <Navigation/>
      <Switch>
        <Route exact path="/">
          <div className="section">
          <Home details={this.state.details}/>
          </div>
        </Route>
        <Route path="/add">
          <div className="section">
            <Form details={this.state.details} form_detail={this.state.form_detail} handle={this.handle}/>
          </div>
        </Route>
        <Route path='/list'>
          <div className="section">
            <List form_detail={this.state.form_detail}/>
          </div>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}
}

export default App;