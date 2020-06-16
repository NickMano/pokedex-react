import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from "../containers/Home";
import NotFound from "../containers/NotFound";
import PokemonPage from "../containers/PokemonPage";


const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pokemon/:id" component={PokemonPage} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default App