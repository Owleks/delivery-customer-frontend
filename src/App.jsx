import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import MenusPageComponent from './pages/menus-page/component';
import OrderPageComponent from './pages/order-page/component';
import DeliveryPageComponent from './pages/delivery-page/component';
import AppContextProvider from './appContext';
import BasketDialog from './common/components/basket-dialog/component';
import MenuPageComponent from './pages/menu-page/component';
import HeaderComponent from './common/components/header/component';

function App() {
  return (
    <>
      <AppContextProvider>
        <Router>
          <div>
            <HeaderComponent/>
            <Route exact path="/" component={MenusPageComponent}>
            </Route>
            <Route path="/menu/:menuId" component={MenuPageComponent}>
            </Route>
            <Route path="/order" component={OrderPageComponent}>
            </Route>
            <Route path="/delivery" component={DeliveryPageComponent}>
            </Route>
          </div>
          <BasketDialog/>
        </Router>
      </AppContextProvider>
    </>
  );
}

export default App;
