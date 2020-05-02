import React from 'react';
import Theteam from "./theteam"
import Homepage from "./Homepage"
import Diningroom from "./diningroom"
import Marcol from "./marcol"
import Contact from "./contact"
import Photos from "./photos"

import {BrowserRouter, Switch, Route} from "react-router-dom"

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/"><Homepage/></Route>
                <Route exact path="/theteam"><Theteam/></Route>
                <Route exact path="/diningroom"><Diningroom/></Route>
                <Route exact path="/marcol"><Marcol/></Route>
                <Route exact path="/photos"><Photos/></Route>
                <Route exact path="/contact"><Contact/></Route>

            </Switch>
        </BrowserRouter>

    );
}