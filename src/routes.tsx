import React from "react"
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home"
import CreatePoint from "./Pages/CreatePoint"


const Routes = () =>{
    return(
        <BrowserRouter>
            <Route path="/" component={Home} exact></Route>
            <Route path="/create-point" component={CreatePoint}></Route>
        </BrowserRouter>

    )
}

export default Routes