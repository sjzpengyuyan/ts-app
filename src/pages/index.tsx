// 路由懒加载
import { lazy } from 'react'

const Home = lazy(() => import('./home'))
const DetailPage = lazy(() => import('./detailPage'))

export { Home, DetailPage }