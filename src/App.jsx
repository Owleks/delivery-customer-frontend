import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import HomePage from './pages/home-page/component';
import OrderPage from './pages/order-page/component';
import MenuPage from './pages/menu-page/component';
import AppContextProvider from './appContext';

function App() {
    return (
        <>
            <AppContextProvider>
                <Router>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/menu/:menuId">Menu</Link>
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
            </AppContextProvider>
        </>
    );
}

export default App;
