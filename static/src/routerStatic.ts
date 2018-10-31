
import Content from './pages/Content/content';
import ContentList from './pages/ContentList/contentList';
import ContentDetail from './pages/ContentDetail/contentDetail';
import ContentLike from './pages/ContentLike/contentLike';
import ContentComment from './pages/ContentComment/contentComment';
import ContentPoint from './pages/ContentPoint/contentPoint';
import Logins from './pages/Logins/logins';
// import Logins from './pages/Login/login';

export default [
  {
    path : '/',
    exact : true,
    component : Content,
    routes : [
      
    ]
  },{
    path : '/login',
    // exact: true,
    component : Logins
  },{
    path : '/overview',
    component : Content,
    routes : [
      {
        path: '/overview/list',
        exact: true,
        component: ContentList
      }, 
      {
        path: '/overview/detail',
        exact: true,
        component: ContentDetail
      }, {
        path: '/overview/like',
        exact: true,
        component: ContentLike
      }, {
        path: '/overview/comment',
        exact: true,
        component: ContentComment
      }, {
        path: '/overview/point',
        exact: true,
        component: ContentPoint
      },
    ]
  },
]