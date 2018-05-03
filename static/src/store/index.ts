import {observable, action} from 'mobx';

interface Stores {
  actived: string,
  updateActive: (id: string) => void,
  projectList: any[],
  updateProjectList : (arr:any[]) => void,
  projectTime: ProjectTime,
  updateProjectTime: ({startTime, endTime}:any) => void,
  isLogin:boolean,
  login:() => Promise<any>
}
interface ProjectTime{
  startTime: any,
  endTime: any
}
export interface store {
  store:Stores
}

class Store {
  @observable isLogin = false;
  @action login = () => {
    this.isLogin = true;
    return Promise.resolve(true);
  }
  @action loginOut = () => {
    this.isLogin = false;
  }

  @observable actived = '0';
  @action updateActive = (id:string) => {
    this.actived = id;
  }

  @observable projectList:any[] = [
    {
      name: '项目一',
      id: '0'
    }, {
      name: '项目二',
      id: '1'
    }
  ]
  @action updateProjectList = (arr:any[]) => {
    let res:any[] = [];
    this.projectList = res.concat(arr);
  }

  @observable projectTime:ProjectTime = {
    startTime: null,
    endTime: null
  }
  @action updateProjectTime = ({startTime, endTime}:any) => {
    this.projectTime.startTime = startTime;
    this.projectTime.endTime = endTime;
  }
}

export default new Store()