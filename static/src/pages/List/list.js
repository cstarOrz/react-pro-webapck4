import React, {Component} from 'react'
import Loadable from 'react-loadable';
import Loading from '../../components/Loading/Loading'


const LoadableComponent = Loadable({
  loader: () => import('./index'),
  loading: Loading
})

class List extends Component {
  constructor(props) {
    super(props);
    console.log('list',props)
  }
  render() {
    return (
      <LoadableComponent {...this.props}/>
    );
  }
}
export default List