import React, {Component} from 'react'
import {Layout, Table, Pagination, Loading} from 'element-react';
import {observer, inject} from 'mobx-react';
import Left from '../../components/Left'
import Top from '../../components/Top'
import Searchs from '../../components/SearchComponent'
// import {getBase} from '../../utils/httpServers'
import './index.less'

@inject('store')
@observer
class List extends Component {
  constructor(props) {
    super(props);
    console.log(props, 'props-list-index')
    // console.log(props.match.params, 'params') if(!props.match.params.type) {
    // this.props.history.push(`/content`) }
    this.state = {
      columns: [
        {
          label: "日期",
          prop: "date",
          width: 180
        }, {
          label: "姓名",
          prop: "name",
          width: 180
        }, {
          label: "地址",
          prop: "address"
        }
      ],
      data: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      fullscreen: false
    }
    // this.showLoading();
  }
  showLoading() {
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.setState({fullscreen: false});
    }, 3000);
  }
  handleData(data) {
    const pid = this.props.store.actived;
    console.log(data,'data');
    // getBase({
    //   pid:pid,
    //   start_time:data.start_time,
    //   end_time:data.end_time
    // }).then((res)=> {
    //   console.log(res);
    // })
  }
  componentWillReceiveProps(nextProps) {
    console.log('nextProps',nextProps.location.pathname)
    console.log('nowProps',this.props.location.pathname)
    if (nextProps.location.pathname != this.props.location.pathname) {
      console.log('ipdate')
    }
  }
  // componentDidUpdate() {
  //   console.log('componentDidUpdate-list')
  // }
  render() {
    return (
      <div className="container">
        <Top></Top>
        <div>&nbsp;</div>
        <Layout.Row>
          <Layout.Col span="4">
            <Left active='0'></Left>
          </Layout.Col>
          <Layout.Col span="20">
            <div className="table-info">
              {this.state.fullscreen && <Loading fullscreen={true}/>}
              <Searchs handleData={this.handleData.bind(this)}></Searchs>
              <Table
                style={{
                width: '100%'
              }}
                columns={this.state.columns}
                data={this.state.data}
                stripe={true}/>
              <div className="block">
                <Pagination className="pages" layout="prev, pager, next" total={1000}/>
              </div>
            </div>
          </Layout.Col>
        </Layout.Row>
      </div>
    )
  }
}

export default List