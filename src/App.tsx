import React, { Suspense, useEffect, useState } from "react"
import { Spin, ConfigProvider } from 'antd';
import './App.less'
import zhCN from 'antd/es/locale/zh_CN'


const App = () => {


    // 子应用监听
    // const dataListener = (data: any) => {
    //     console.log('来自基座应用的数据', data)
    // }
    // useEffect(() => {
    //     window.microApp.addDataListener!(dataListener, true)
    //     return () => window.microApp?.removeDataListener(dataListener)
    // }, [dataListener])

    // 子应用主动获取
    // useEffect(() => {
    //     const data = window.microApp?.getData()
    //     console.log('来自基座应用的数据', data)
    // }, [])



    // 子应用监听全局数据
    // const globalListener = (data: any) => {
    //     console.log('子应用监听全局数据', data)
    // }
    // useEffect(() => {
    //     window!.microApp!.addGlobalDataListener(globalListener, true)
    //     return () => window.microApp.removeGlobalDataListener(globalListener)
    // }, [globalListener])

    // 子应用发送全局数据
    // useEffect(() => {
    //     window.microApp.setGlobalData!({ type: '子应用发送全局数据' })
    // }, [])


    return (
        <ConfigProvider locale={zhCN} >
            <Suspense fallback={<Spin tip="努力加载中..."><div className='loadingbox'></div></Spin>}>
                child
            </Suspense>
        </ConfigProvider>
    )
}

export default App