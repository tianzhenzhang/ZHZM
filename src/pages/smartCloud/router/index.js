import Vue from 'vue'
import Router from 'vue-router'
import overview from '../components/overview'
import illumination from '../components/illumination'
import mapView from '../components/mapView'
import Meteorological from '../components/Meteorological'
import monitor from '../components/monitor'
import screenManager from '../components/screenManager'
import smartPole from '../components/smartPole'
import smartPoledetail from '../components/smartPoledetail'
import powerDetail from '../components/powerDetail'
import screenDetail from '../components/screenDetail'
import wifiShare from '../components/wifiShare'
import alarmManager from '../components/alarmManager'
import setting from '../components/setting/setting'
import project from '../components/setting/components/project'
import AcquisitionModule from '../components/setting/components/AcquisitionModule'
import EdgeController from '../components/setting/components/EdgeController'
import LightController from '../components/setting/components/LightController'
import monitorMoudule from '../components/setting/components/monitorMoudule'
import screenMoudule from '../components/setting/components/screenMoudule'

Vue.use(Router)

export default new Router({
    linkActiveClass: 'active',
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'overview',
            component: overview
        },
        {
            path: '/illumination',
            name: 'illumination',
            component: illumination
        },
        {
            path: '/mapView',
            name: 'mapView',
            component: mapView
        },
        {
            path: '/Meteorological',
            name: 'Meteorological',
            component: Meteorological
        },
        {
            path: '/monitor',
            name: 'monitor',
            component: monitor
        },
        {
            path: '/screenManager',
            name: 'screenManager',
            component: screenManager
        },
        {
            path: '/smartPole',
            name: 'smartPole',
            component: smartPole
        },
        {
            path: '/smartPoledetail',
            name: 'smartPoledetail',
            component: smartPoledetail
        },
        {
            path: '/powerDetail',
            name: 'powerDetail',
            component: powerDetail
        },
        {
            path: '/screenDetail',
            name: 'screenDetail',
            component: screenDetail
        },
        {
            path: '/wifiShare',
            name: 'wifiShare',
            component: wifiShare
        },
        {
            path: '/alarmManager',
            name: 'alarmManager',
            component: alarmManager
        },
        {
            path: '/setting',
            name: 'setting',
            component: setting,
            children: [
                {
                    path: '',
                    component: project
                },
                {
                    path: 'AcquisitionModule',
                    component: AcquisitionModule
                },
                {
                    path: 'EdgeController',
                    component: EdgeController
                },
                {
                    path: 'LightController',
                    component: LightController
                },
                {
                    path: 'monitorMoudule',
                    component: monitorMoudule
                },
                {
                    path: 'screenMoudule',
                    component: screenMoudule
                }
            ]
        }
    ]
})
