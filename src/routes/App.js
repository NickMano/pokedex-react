import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from "../containers/Home";
import NotFound from "../containers/NotFound";
import PokemonDetail from "../containers/PokemonDetail";


const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pokemon/:id" component={PokemonDetail} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default App