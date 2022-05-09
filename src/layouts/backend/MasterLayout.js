import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";

import '../../assets/backend/css/styles.css'
import '../../assets/backend/js/scripts'

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import routes from "../../routes/routes";



const MasterLayout = () => {
    return (
        <div className="sb-nav-fixed">
            <Navbar/>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar/>
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <Switch>
                            {routes.map((route,index)=>{
                                return(
                                    route.component && (
                                        <Route
                                            key={index}
                                            path={route.path}
                                            exact={route.exact}
                                            name={route.name}
                                            render={(props)=>(
                                                <route.component {...props}/>
                                            )}

                                        />
                                    )
                                )
                            })}
                            <Redirect  from={'/admin'} to={'/admin/dashboard'}/>
                        </Switch>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default MasterLayout;
