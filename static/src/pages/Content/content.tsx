import * as React from "react";
import * as Loadable from 'react-loadable';
import Loading from '../../components/Loading/Loading'

const LoadableComponent = Loadable['default']({
  loader: () => import('./index'),
  loading: Loading
})

class Content extends React.Component {
  render() {
    return (
      <LoadableComponent {...this.props}/>
    );
  }
}
export default Content