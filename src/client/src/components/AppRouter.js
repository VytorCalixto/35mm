import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './home/Home';
import Login from './login/Login';
import Movies from './movies/Movies';
import NavBar from './NavBar';

const AppRouter = () => (
    <Router>
        <div>
            <NavBar />
            <Route path="/" exact component={Login} /> 
            {/* <Route path="/login" component={Login}/> */}
            <Route path="/movies" component={Movies}/>
        </div>
    </Router>
);

export default AppRouter;