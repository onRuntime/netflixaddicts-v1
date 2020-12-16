import React from "react";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SearchContext from "./components/pages/Search/context";
import {useSearch} from "./hooks/useSearch";

import "./css/style.css";

const App = () => {
    const searchText = useSearch();

    return (
        <BrowserRouter>
            <SearchContext.Provider value={searchText}>
                <Header/>
                <BrowserRouter>
                    <Switch>
                        <Route component={Home} exact path="/"/>
                    </Switch>
                </BrowserRouter>
            </SearchContext.Provider>
        </BrowserRouter>
    );
};

export default App;
