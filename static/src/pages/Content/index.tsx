import * as React from "react";
import {observer, inject} from 'mobx-react';
import {withRouter} from 'react-router-dom';
import { renderRoutes} from 'react-router-config';
import Top from '../../components/Top/index';
import './index.less';
import { Props ,Routes} from "../../utils/interface/index";

interface props extends Props,Routes {
  
}

@inject('store')
@observer
class Content extends React.Component<props,any> {
  constructor(props:any) {
    super(props)
    console.log('Content-Component')
  }
  componentWillUnmount() {
    console.log('Content-componentWillUnmount')
    this.setState = (state,callback)=>{
      return;
    };
  }
  
  render() {
    return (
      <div className="container">
        <Top></Top>
        <div className="info">
          {renderRoutes(this.props.route.routes)}
        </div>
      </div>
    )
  }
}
// export default Content
export default withRouter(Content)