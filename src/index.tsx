import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './rootReducer'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
const middlewares = [thunkMiddleware, promiseMiddleware]

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const store = createStore(
    reducers, /* preloadedState, */
    composeEnhancers(
        applyMiddleware(...middlewares)
    ))


const root: any = document.getElementById('root')
window.addEventListener('unmount', function () {
    console.log('子应用 micro-app 环境中卸载>>>>')
    ReactDOM.unmountComponentAtNode(root)
})
const render = (Comp: React.SFC) => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter basename={window.__MICRO_APP_BASE_ROUTE__ || '/'}>
                <Comp />
            </BrowserRouter>
        </Provider>, root
    );
}
render(App)
// 应用每次渲染时都会执行 mount 方法，在此处可以执行初始化相关操作（必传)
// export function mount() {
//     render(App)
// }
// 应用每次卸载时都会执行 unmount 方法，在此处可以执行卸载相关操作（必传)
export function unmount() {
    //  卸载应用
    ReactDOM.unmountComponentAtNode(root)
}
// 非微前端环境直接运行
if (!window.__MICRO_APP_ENVIRONMENT__) {
    // mount()
} else {
    console.log('子应用在 micro-app 环境中渲染')
}

// 模块热替换的 API
// declare const module: any;

// if (module.hot) {
//     module.hot.accept('./App', () => {
//         const NextEntry = require('./App').default
//         render(NextEntry)
//     })
// }

// serviceWorker.unregister();
