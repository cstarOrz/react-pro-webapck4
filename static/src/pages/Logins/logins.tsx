import * as React from "react";
import * as Loadable from 'react-loadable';
import Loading from '../../components/Loading/Loading'
// import Login from './index'
 
const LoadableComponent = Loadable['default']({
  loader: () => import('./index'),
  loading: Loading
})

class Logins extends React.Component<any,any> {
  render() {
    return (
      <LoadableComponent/>
    );
  }
}
export default Logins