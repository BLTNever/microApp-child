import React, { } from "react"
import { Spin, ConfigProvider, Button } from 'antd';
import { useHistory } from 'react-router-dom'

const Index = () => {
    const history = useHistory()
    const handDetail = () => {
        history.push(`/detail`)
    }
    return (
        <Button type='link' onClick={() => handDetail()}>查看</Button>
    )
}

export default Index