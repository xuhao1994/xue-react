import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import route from './route';
import {Provider} from 'react-redux';
import configreStore from './redux/configreStore';

let store = configreStore();

ReactDOM.render( 
   <Provider store={store}>
    {route}
   </Provider>,
    document.getElementById('root'));
registerServiceWorker();
