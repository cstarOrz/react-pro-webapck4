// import React, {Component} from 'react';
import * as React from "react";
import {observer, inject} from 'mobx-react';
import {renderRoutes} from 'react-router-config'
import {withRouter} from 'react-router-dom';
import * as Qs from 'qs';
import List from './routerStatic';
import { Props } from "./utils/interface";

const routes = [...List];
interface Params {
  pid:string,
  start_time:any,
  end_time:any
}

@inject('store')
@observer
class App extends React.Component < Props, {} > {
  constructor(props:any, context?: any) {
    super(props, context)
    console.log('App-TS');
    this.setUrlParamsToStore()
  }
  formatParams() {
    let res:Params = {} as Params;
    res.pid = this.props.store.actived;
    if(this.props.store.projectTime.startTime) res.start_time = this.props.store.projectTime.startTime;
    if(this.props.store.projectTime.endTime) res.end_time = this.props.store.projectTime.endTime;
    return res;
  }
  setUrlParamsToStore() {
    let isLoginPages = this.props.location.pathname.indexOf('/login')>-1;
    if(isLoginPages) return;
    let urlParams:Params = Qs.parse(this.props.location.search.replace(/^\?/, ''));
    if(urlParams&&urlParams.pid) {
      if(urlParams.pid !== this.props.store.actived) this.props.store.updateActive(urlParams.pid);
      if(urlParams.start_time&&urlParams.end_time) {
        this.props.store.updateProjectTime({
          startTime:urlParams.start_time,
          endTime:urlParams.end_time
        });
      }
    } else {
      console.log('setUrlParamsToStore');
      console.log(routes,'routes')
      this.props.history.push({
        pathname: '/overview/list',
        search: '?'+ Qs.stringify(this.formatParams())
      });
    }
  }
  render() {
    return (
      <div className="main">
        <div>
          {renderRoutes(routes)}
        </div>
      </div>
    )
  }
}
export default withRouter(App)