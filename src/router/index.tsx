import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { Layout } from 'antd'
const { Content } = Layout

import { portalList } from './portalList'
const RouteItem = (props: any) => {
    const { redirect, path, component, key } = props
    if (redirect) {
        return <Redirect exact key={key} from={path} to={redirect} />
    }
    return <Route exact key={key} component={component} path={path} />
}

// eslint-disable-next-line no-array-constructor
let Routes: any = new Array()

// 获取子路由

const loopRoute = (route: any, i: any, pre_path?: string) => {
    return route.children.forEach((routeChild: any, idx: number) => {
        let __path = pre_path + routeChild.path
        const { redirect, component, children } = routeChild
        if (children && children.length) {
            // 递归获取子路径
            if (component) {
                Routes = Routes.flat()
                Routes.push(
                    RouteItem({
                        key: `${i}-${idx}`,
                        redirect,
                        path: __path,
                        component: component
                    })
                )
            }
            loopRoute(routeChild, idx, __path)
        } else {
            Routes.push(
                RouteItem({
                    key: `${i}-${idx}`,
                    redirect,
                    path: __path,
                    component: component
                })
            )
        }
    })
}


portalList.forEach((route: any, key) => {
    return Array.isArray(route.children) && route.children.length
        ? loopRoute(route, key, route.path)
        : Routes.push(RouteItem({ key, ...route }))
})

const convertedRoutes = () => {
    // console.log('rerender')
    return (
        // <Content style={{ margin: 20, backgroundColor: '#fff', padding: '0 16px 24px', minHeight: '100%' }}>
        <Content style={{ height: '100%' }}>
            <Switch>{Routes}</Switch>
        </Content>

    )
}

export default convertedRoutes
