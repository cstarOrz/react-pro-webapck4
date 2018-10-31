import * as React from "react";
import {observer, inject} from 'mobx-react';
import { DateRangePicker} from 'element-react';

import dateFormat from '../../utils/Date';

interface states {
  value: any[]
}

@inject('store')
@observer
class Searchs extends React.Component<any,states> {
  paras:any = {}
  constructor(props:any) {
    super(props);
    // console.log(this.props.handleData, 'Searchs')
    this.props = props;
    let {startTime,endTime} = this.props.store.projectTime;
    let start_time = startTime?new Date(startTime):null;
    let end_time = endTime?new Date(endTime):null;
    this.state = {
      value: [start_time,end_time]
    };
    this.paras = {};
  }
  componentWillUnmount() {
    this.setState = (state,callback)=>{
      return;
    };
  }
  changeDate(date:any) {
    // console.log('DateRangePicker1 changed: ', date)
    if(date.length>0) {
      this.paras.start_time = dateFormat(date[0]);
      this.paras.end_time = dateFormat(date[1]);
      this.setState({value: date});
    } else {
      this.paras = {
        start_time:null,
        end_time:null
      };
    }
    this.props.showTime(this.paras);
  }
  render() {
    const {value} = this.state
    return (
      <div className='project-search'>
        <DateRangePicker
          value={value}
          format='yyyy-MM-dd hh:mm:ss'
          placeholder="选择日期范围"
          isShowTime={true}
          onChange={date => {
          this.changeDate(date)
        }}/>
      </div>
    )
  }
}

export default Searchs