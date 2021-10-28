import React, { Suspense, useEffect, useState } from "react"
import { Spin, ConfigProvider, Button } from 'antd';
import './App.less'
import zhCN from 'antd/es/locale/zh_CN'
import Routers from "./router/index"

const App = () => {
   

    return (
        <ConfigProvider locale={zhCN} >
            <Suspense fallback={<Spin tip="努力加载中..."><div className='loadingbox'></div></Spin>}>
          
                <Routers />
            </Suspense>
        </ConfigProvider>
    )
}

export default App