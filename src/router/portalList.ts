import RouteBase from './routeBase'

export const portalList = [
    { id: '1', path: '/goods/master', redirect: false, name: '商品主档', component: RouteBase.GoodsMaster },
    { id: '2', path: '/goods/master/detail', redirect: false, component: RouteBase.MasterDetail },
    { id: '3', path: '/goods/grading', redirect: false, component: RouteBase.GoodsGrading },
    { id: '5', path: '/category/index', redirect: false, name: '类目管理', component: RouteBase.Category },
    { id: '6', path: '/brand/index', redirect: false, name: '品牌管理', component: RouteBase.Brand },
    { id: '7', path: '/plu/index', redirect: false, name: 'PLU编码规则', component: RouteBase.Plu },
    { id: '8', path: '/priceTag/index', redirect: false, name: '价签模版', component: RouteBase.PriceTag },
    { id: '9', path: '/goods/import', redirect: false, component: RouteBase.GoodsImport },
    { id: '9', path: '/goods/history', redirect: false, name: '商品导入历史', component: RouteBase.GoodsImportHistory },
    { id: '11', path: '/tools/speedy', redirect: false, name: '便捷工具', component: RouteBase.ToolsSpeedy },
    { id: '12', path: '/tools/speedyHistory', redirect: false, name: '便捷工具导入历史', component: RouteBase.ToolsSpeedyHistory },
    { id: '13', path: '/tools/end', redirect: false, name: '后台工具', component: RouteBase.ToolsEnd},
    { id: '14', path: '/tools/endHistory', redirect: false, name: '后台工具导入历史', component: RouteBase.ToolsEndHistory },
    { id: '15', path: '/categoryManage/index', redirect: false, name: '品类管理', component: RouteBase.CategoryManage },
    { id: '16', path: '/categoryManage/export', redirect: false, component: RouteBase.CategoryExport},
    { id: '17', path: '/categoryManage/detail', redirect: false, component: RouteBase.CategoryDetail}
]
