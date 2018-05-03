import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react'
// import App from './App';
import App from './AppStatic';
import store from './store'
// import registerServiceWorker from './registerServiceWorker';
import './assets/css/reset.css'
import 'element-theme-default';

ReactDOM.render((
    <Provider store={store}><App/></Provider>
), document.getElementById('root'))
// registerServiceWorker();