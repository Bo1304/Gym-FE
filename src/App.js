import React, { lazy } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import AccessibleNavigationAnnouncer from './components/AccessibleNavigationAnnouncer'

const Layout = lazy(() => import('./containers/Layout'))
const Login = lazy(() => import('./pages/Login'))
const homeUsers = lazy(() => import('./pages/Users/Home'))
// const Login1 = lazy(() => import('./pages/ListHocVien'))
const CreateAccount = lazy(() => import('./pages/CreateAccount'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))

const DetailsTinTuc = lazy(() => import('./pages/DetailsTinTuc'))
function App() {
  return (
    <>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
        <Route exact path="/detailstintuc/:id" component={DetailsTinTuc} />
          <Route path="/home" component={homeUsers} />
          {/* <Route path="/listHocVien" component={Login1} /> */}
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/forgot-password" component={ForgotPassword} />

          {/* Place new routes over this */}
          <Route path="/app" component={Layout} />
          {/* If you have an index page, you can remothis Redirect */}
          {/* cái này là chạy mặc định khi mở project */}
          <Redirect exact from="/" to="/home" />
        </Switch>
      </Router>
    </>
  )
}

export default App
