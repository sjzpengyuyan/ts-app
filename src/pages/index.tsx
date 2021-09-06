// 路由懒加载
import { lazy } from 'react'

const Home = lazy(() => import('./home'))

export { Home }