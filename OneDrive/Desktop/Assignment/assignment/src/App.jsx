// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import './App.css'

import { Route, Router, Switch } from 'react-router-dom'
import React from "react";
import { createBrowserHistory } from 'history'
// import Detail from 'pages/detail/Detail'
// import GlobalStyle from './GlobalStyle'
// import Home from 'pages/home/Home'
// import Login from 'pages/login'
// import Signup from 'pages/signup'
import SignInSide from './Components/login/login'
import BasicTable from "./Components/DataTable/dataTable"
import Paperbase from "./Components/paperbase/Paperbase"

function App() {

  const history = createBrowserHistory();
  return (
    <Router history={history} forceRefresh={true}>
      {/* <GlobalStyle /> */}
      <div className="App">
        <div className="auth-wrapper">
          <Switch>
            <Route exact path="/login" component={() => <SignInSide/>} />
            <Route exact path="/Dashboard" component={() => <BasicTable/>}/>
            <Route exact path="/projectDashboard" component={()=> <Paperbase/>}/>
            {/* <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/home" component={Home} />
            <Route path="/detail" component={Detail} /> */}
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default React.memo(App);