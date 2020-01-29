import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import MenusPageComponent from './pages/menus-page/component';
import OrderPageComponent from './pages/order-page/component';
import MenuPageComponent from './pages/menu-page/component';
import DeliveryPageComponent from './pages/delivery-page/component';
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
                                    <Link to="/">Menus</Link>
                                </li>
                                <li>
                                    <Link to="/menu/:menuId">Menu items</Link>
                                </li>
                                <li>
                                    <Link to="/order">Order</Link>
                                </li>
                                <li>
                                    <Link to="/delivery">Delivery</Link>
                                </li>
                            </ul>
                        </nav>
                        <Route exact path="/">
                            <MenusPageComponent />
                        </Route>
                        <Route path="/menu">
                            <MenuPageComponent />
                        </Route>
                        <Route path="/order">
                            <OrderPageComponent />
                        </Route>
                        <Route path="/delivery">
                            <DeliveryPageComponent />
                        </Route>
                    </div>
                </Router>
            </AppContextProvider>
        </>
    );
}

export default App;
