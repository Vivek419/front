import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Dashboard from '../Dashboard/dashboard';
import Login from '../Auth/login'
import SignUp from '../Auth/signup'

export default function Routes(props) {
 return(
  <Router>
 
<div>
  <Route path='/Login' exact strict component={Login}  history={props.history}/>
  <Route path='/Dashboard' exact strict component={Dashboard}  history={props.history}/>
  <Route path='/SignUp' exact strict component={SignUp}  history={props.history}/>

</div>

  </Router>  

  

 )
}