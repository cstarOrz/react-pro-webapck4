import React, {Component} from 'react'
import {renderRoutes} from 'react-router-config'
import {HashRouter} from 'react-router-dom'
import Qs from 'qs';
import List from './routerStatic'

const routes = [...List]
// console.log(routes);
class App extends Component {
  constructor(props, context) {
    super(props, context)
    console.log('App');
    // if(!window.location.hash) {
    //   window.location.href = '/#/overview/list?pid=0'
    // }
  }
  render() {
    return (
      <HashRouter>
        <div className="main">
          <div>
          {renderRoutes(routes)}
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default App