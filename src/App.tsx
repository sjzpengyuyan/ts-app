import React from 'react'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
// import { Home } from './pages'
import { Routers } from './router'
function App () {
  return (
      <Switch>
        {
          Routers.map(router => (
            <Route
              exact={!router.notExect}
              key={router.path}
              path={router.path}
              component={router.component}
            >
            </Route>
          ))
        }
        {/* 设置默认路由 推荐方法一*/}
        {/* 方法一 */}
        {/* <Route path="/" component={Home} exact></Route> */}
        {/* 方法二 重定向*/}
        <Redirect path="/" to="/home" />
      </Switch>
  )
}

export default withRouter(App)
