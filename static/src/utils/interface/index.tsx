import {RouteComponentProps} from 'react-router-dom';
import {  store } from "../../store";

export interface RouteConfig {
  path?: string;
  exact?: boolean;
  strict?: boolean;
  routes?: RouteConfig[];
}
export interface Routes {
  route: RouteConfig;
}

export interface Props extends RouteComponentProps<any>,store {

}

export interface UrlConfig {
  pid:string,
  urls:string,
  url:string,
  router:string
}
