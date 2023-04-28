import React from 'react';
import { Route } from 'react-router-dom';

import CameraHandler from '../cameraHandler/index.js';
import ProductNotFound from '../productNotFound/index.js';


const Main = () => (
  <main className="main__wrapper">

        <Route path='/'> <CameraHandler /> </Route>
        <Route path='/product/not-found'>  <ProductNotFound /> </Route>

  </main>
);

export default Main;
