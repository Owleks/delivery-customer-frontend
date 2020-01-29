import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import MenusPageComponent from './pages/menus-page/component';
import OrderPageComponent from './pages/order-page/component';
import MenuItemsPageComponent from './pages/menu-items-page/component';
import DeliveryPageComponent from './pages/delivery-page/component';
import AppContextProvider from './appContext';
import BasketDialog from './common/components/basket-dialog/component';

function App() {
    return (
        <>
            <AppContextProvider>
                <Router>
                    <div>
                        <Route exact path="/" component={MenusPageComponent}>
                        </Route>
                        <Route path="/menu/:menuId" component={MenuItemsPageComponent}>
                        </Route>
                        <Route path="/order" component={OrderPageComponent}>
                        </Route>
                        <Route path="/delivery" component={DeliveryPageComponent}>
                        </Route>
                    </div>
                </Router>
                <BasketDialog />
            </AppContextProvider>
        </>
    );
}

export default App;
