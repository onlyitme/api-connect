import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


import MasterLayout from "./layouts/backend/MasterLayout";
import Home from "./pages/frontend/Home";
import Login from "./pages/backend/auth/Login";
import Register from "./pages/backend/auth/Register";


// import Home from '.component

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={'/'} component={Home}/>


                <Route path={'/admin/login'} component={Login}/>
                <Route path={'/admin/register'} component={Register}/>
                <Route path={'/admin'} name={'Admin'} render={(props) => <MasterLayout {...props}/>} />

            </Switch>
        </Router>
    );
}

export default App;
