import React from 'react';
import './App.css';
import {
    BrowserRouter as Router, Route, Link
} from 'react-router-dom';
import HeaderComponent from "./pages/header/component";
import MenusPageComponent from './pages/menus-page/component';
import MenuPageComponent from './pages/menu-page/component';
import OrderPageComponent from './pages/order-page/component';
import DeliveryPageComponent from './pages/delivery-page/component';
import AppContextProvider from './appContext';

function App() {
    return (
        <>
            <AppContextProvider>
                <Router>
                    <div>
                        <HeaderComponent />
                        <Route exact path="/">
                            <MenusPageComponent />
                        </Route>
                        <Route path="/menu/:menuId">
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
