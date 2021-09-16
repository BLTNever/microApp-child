import React, { lazy } from 'react'

// 基本资料
const GoodsMaster = lazy(() => import(/* webpackChunkName: "goodsMaster" */'@views/Goods/Master'))
const GoodsImport = lazy(() => import(/* webpackChunkName: "goodsImport" */'@views/Goods/Import'))
const GoodsImportHistory = lazy(() => import(/* webpackChunkName: "goodsImportHistory" */'@views/Goods/ImportHistory'))
const GoodsGrading = lazy(() => import(/* webpackChunkName: "goodsGrading" */'@views/Goods/Grading'))
const MasterDetail = lazy(() => import(/* webpackChunkName: "masterDetail" */'@views/Goods/Master/Detail'))
// 类目
const Category = lazy(() => import(/* webpackChunkName: "category" */'@views/Category/index.tsx'))
// 品牌
const Brand = lazy(() => import(/* webpackChunkName: "brand" */'@views/Brand/index.tsx'))
// PLU 
const Plu = lazy(() => import(/* webpackChunkName: "plu" */'@views/Plu/index.tsx'))
// 价签
const PriceTag = lazy(() => import(/* webpackChunkName: "priceTag" */'@views/PriceTag/index.tsx'))

const Reduxpage = lazy(() => import(/* webpackChunkName: "reduxpage" */'@views/ReduxPage'))

// 便捷工具
const ToolsSpeedy = lazy(() => import(/* webpackChunkName: "Speedy" */'@views/Tools/Speedy'))

// 便捷工具导入历史
const ToolsSpeedyHistory = lazy(() => import(/* webpackChunkName: "SpeedyHistory" */'@views/Tools/SpeedyHistory'))

// 后台工具
const ToolsEnd = lazy(() => import(/* webpackChunkName: "End" */'@views/Tools/End'))
// 后台工具导入历史
const ToolsEndHistory = lazy(() => import(/* webpackChunkName: "EndHistory" */'@views/Tools/EndHistory'))
// 品类管理
const CategoryManage = lazy(() => import(/* webpackChunkName: "CategoryManage" */'@views/CategoryManage'))
// 品类管理导入
const CategoryExport = lazy(() => import(/* webpackChunkName: "CategoryManage" */'@views/CategoryManage/export'))
const CategoryDetail = lazy(() => import(/* webpackChunkName: "CategoryManage" */'@views/CategoryManage/Detail'))
export default {
    GoodsMaster,
    GoodsImport,
    GoodsImportHistory,
    MasterDetail, 
    GoodsGrading,
    Category,
    Brand,
    Plu,
    PriceTag,
    Reduxpage,
    ToolsSpeedy,
    ToolsSpeedyHistory,
    ToolsEnd,
    ToolsEndHistory,
    CategoryManage,
    CategoryExport,
    CategoryDetail
}
