import React, { lazy } from 'react'

const Detail = lazy(() => import(/* webpackChunkName: "Detail" */'../views/detail'))
const Index = lazy(() => import(/* webpackChunkName: "Index" */'../views/index'))

export default {
    Detail,
    Index,
}
