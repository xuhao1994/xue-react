import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Layout from './layout/Layout';
import Home from './container/Home/Home';


const router = (
  <BrowserRouter>
    <Layout>
      <Route path='/' component={Home}/>
    </Layout>
  </BrowserRouter>
);

export default router;