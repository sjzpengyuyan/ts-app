import { Home } from '../pages'

export type RouterType = {
	path: string
	component: React.LazyExoticComponent<any>
	root: string[]
	notExect?: boolean
}

const HomeRouter: RouterType = {
	path: '/home',
	component: Home,
	root: [],
}
// 总路由
const Routers: RouterType[] = [HomeRouter]

export { Routers }
