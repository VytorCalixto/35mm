import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from './NavBar';
import Home from './home/Home';
import Login from './login/Login';
import Movies from './movies/Movies';
import MovieDetail from './movies/movieDetail/MovieDetail';

const AppRouter = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div>
                <NavBar />
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/movies" component={Movies} />
                {/* <Route path="/movies/:id" component={MovieDetail} /> */}
            </div>
        </Router>
    </Provider>
);

export default AppRouter;