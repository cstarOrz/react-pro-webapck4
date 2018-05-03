import React, {Component} from 'react'
import {HashRouter} from 'react-router-dom'

import Routerlist from './router'
class App extends Component {
  // constructor(props, context) {
  //   super(props, context)
  //   console.log(this.props,'App')
  // }
  render() {
    return (
      <HashRouter>
        <div className="main">
          <div>
            <Routerlist />
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default App
