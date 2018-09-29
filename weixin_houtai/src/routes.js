import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'

//数据统计
import Fan from './views/BdataStatistics/fan.vue'
import Graphic from './views/BdataStatistics/graphic.vue'
//公众号管理
import List from './views/CpublicNumberManagement/list.vue'
import CustomMessage from './views/CpublicNumberManagement/customMessage.vue'
//素材管理
import AterialManagement from './views/DaterialManagement/aterialManagement.vue'
//消息管理
import MessageManagement from './views/EmessageManagement/messageManagement.vue'
//粉丝管理
import FanManagement from './views/FfanManagement/fanManagement.vue'
//上海巨网
import PublicNumberList from './views/GshanghaiGiantNetwork/publicNumberList.vue'
import GCustomMessage from './views/GshanghaiGiantNetwork/gCustomMessage.vue'
//系统设置
import MenuManagement from './views/HsystemSettings/menuManagement.vue'
//权限控制
import AuthorityManagement from './views/IaccessControl/authorityManagement.vue'
import UserGroupManagement from './views/IaccessControl/userGroupManagement.vue'
import AdministratorList from './views/IaccessControl/administratorList.vue'
//链接管制
import LinkList from './views/JlinkControl/linkList.vue'
import RandomLink from './views/JlinkControl/randomLink.vue'
let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },

    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-address-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/main', component: Main, name: '首页' }
        ]
    },

    {
        path: '/',
        component: Home,
        name: '数据统计',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/fan', component: Fan, name: '粉丝统计' },
            { path: '/graphic', component: Graphic, name: '图文统计' }
        ]
    },

    {
        path: '/',
        component: Home,
        name: '公众号管理',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/list', component: List, name: '公众号列表' },
            { path: '/customMessage', component: CustomMessage, name: '自定义消息' },
        ]
    },

    {
        path: '/',
        component: Home,
        name: '素材管理',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/aterialManagement', component: AterialManagement, name: '素材管理' },
        ]
    },

    {
        path: '/',
        component: Home,
        name: '消息管理',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/messageManagement', component: MessageManagement, name: '消息管理' }
        ]
    },

    {
        path: '/',
        component: Home,
        name: '粉丝管理',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/fanManagement', component: FanManagement, name: '粉丝管理' },
        ]
    },

    {
        path: '/',
        component: Home,
        name: '上海巨网',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/publicNumberList', component: PublicNumberList, name: '公众号列表' },
            { path: '/gCustomMessage', component: GCustomMessage, name: '自定义消息' },
        ]
    },

    {
        path: '/',
        component: Home,
        name: '系统设置',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/menuManagement', component: MenuManagement, name: '菜单管理' },
        ]
    },

    {
        path: '/',
        component: Home,
        name: '权限控制',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/authorityManagement', component: AuthorityManagement, name: '权限管理' },
            { path: '/userGroupManagement', component: UserGroupManagement, name: '用户组管理' },
            { path: '/administratorList', component: AdministratorList, name: '管理员列表' },
        ]
    },

    {
        path: '/',
        component: Home,
        name: '链接转制',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/linkList', component: LinkList, name: '链接列表' },
            { path: '/randomLink', component: RandomLink, name: '随机链接' },
        ]
    },

















    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;