import React, {Component} from 'react'
import Loadable from 'react-loadable';
import Loading from '../../components/Loading/Loading'


const LoadableComponent = Loadable({
  loader: () => import('./index'),
  loading: Loading
})

class Overview extends Component {
  render() {
    return (
      <LoadableComponent />
    );
  }
}
export default Overview