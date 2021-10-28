import RouteBase from './routeBase'

export const portalList = [
    { id: 'index', path: '/', redirect: false, component: RouteBase.Index },
    { id: 'detail', path: '/detail', redirect: false, component: RouteBase.Detail },
]
