import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


import Home from "./components/frontend/Home";
import MasterLayout from "./layouts/backend/MasterLayout";

// import Home from '.component

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={'/'} component={Home}/>


                <Route path={'/admin'} name={'Admin'}
                       render={(props) => <MasterLayout {...props}/>} />


            </Switch>
        </Router>
    );
}

export default App;
