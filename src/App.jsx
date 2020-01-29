import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import HomePage from './pages/home-page/component';
import OrderPage from './pages/order-page/component';
import MenuPage from './pages/menu-page/component';

function App() {
    return (
        <>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/menu">About</Link>
                            </li>
                            <li>
                                <Link to="/order">Users</Link>
                            </li>
                        </ul>
                    </nav>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/menu">
                        <MenuPage />
                    </Route>
                    <Route path="/order">
                        <OrderPage />
                    </Route>

                </div>
            </Router>
        </>
    );
}

export default App;
