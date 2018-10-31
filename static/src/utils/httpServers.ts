import axios from './http';
import {Time, Base,Like,Point} from './resetApi';
import * as Qs from 'qs'

interface Params {
  pid:string,
}
interface ParamsBasePage extends Params {
  start_time:string,
  end_time:string
}

interface ParamsBase extends ParamsBasePage {
  groupType:number
}

interface Likes extends Params{
  version:string,
  url:string,
  router:string
}

interface Points extends Likes,ParamsBasePage{

}

function tranformParas(params:any) {
  return (params:any)=>{
    return Qs.stringify(params).replace(/%3A/g, ':')
  }
}
export function getTime(params:any) {
  return axios.get(Time.Time, {params: params});
}

export function getBase(params:ParamsBase) {
  return axios.get(Base.Base, {
    params: params,
    paramsSerializer: tranformParas(params)
  });
}

export function getBasePage(params:ParamsBasePage) {
  return axios.get(Base.BasePage, {
    params: params,
    paramsSerializer: tranformParas(params)
  });
}

export function getBaseUa(params:Params) {
  return axios.get(Base.BaseUa, {
    params: params
  });
}

export function getLike(params:Likes) {
  return axios.get(Like.Like, {
    params: params
  });
}
export function getComment(params:Likes) {
  return axios.get(Like.Comment, {
    params: params
  });
}

export function getPoint(params:Points) {
  return axios.get(Point.Point, {
    params: params,
    paramsSerializer: tranformParas(params)
  });
}
export function getPointHotel(params:Points) {
  return axios.get(Point.PointHotel, {
    params: params,
    paramsSerializer: tranformParas(params)
  });
}