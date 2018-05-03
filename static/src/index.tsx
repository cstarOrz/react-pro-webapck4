import * as React from "react";
import * as ReactDOM from "react-dom";
import {HashRouter} from 'react-router-dom';
import {Provider} from 'mobx-react';

import App from './AppStatic';
import store from './store';

import './assets/css/reset.css'
import 'element-theme-default';

ReactDOM.render((
    <Provider store={store}>
        <HashRouter><App/></HashRouter>
    </Provider>
), document.getElementById('root'));
// registerServiceWorker();