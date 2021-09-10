import { Home, DetailPage } from '../pages'

interface RouterType  {
	path: string
	component: React.LazyExoticComponent<any>
	root: string[]
	notExect?: boolean
}

const HomeRouter: Array<RouterType> = [
    {
        path: '/home',
        component: Home,
        root: [],
    },
    {
        path: '/detilPage',
        component: DetailPage,
        root: [],
    }
]

// 总路由
const Routers: RouterType[] = HomeRouter

export { Routers }
