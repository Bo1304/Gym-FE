

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

const UI_User = lazy(() => import('../src/pages/UI/AllHeaderFooter'))
const HomeGym = lazy(() => import('../src/pages/Users/HomeGym'))
const AboutGym = lazy(() => import('../src/pages/Users/AboutGym'))
const CLBGym = lazy(() => import('../src/pages/Users/CLBGym'))
const CalendarGym = lazy(() => import('../src/pages/Users/CalendarGym'))
const ContactGym = lazy(() => import('../src/pages/Users/ContactGym'))
const LoginUserGym = lazy(() => import('../src/pages/Users/LoginUserGym'))
const RegisterUserGym = lazy(() => import('../src/pages/Users/RegisterUserGym'))
const TheNewsGym = lazy(() => import('../src/pages/Users/TheNewsGym'))
const DetailsTheNews = lazy(() => import('./pages/Users/DetailsTheNew'))
const KhoaTapGym = lazy(() => import('./pages/Users/KhoaTapGym'))
const ProfileUser = lazy(() => import('./pages/Users/ProfileUserGym'))
const DetailsKhoaTapGym = lazy(() => import('./pages/Users/DetailsKhoaTapGym'))
const CartGym = lazy(() => import('./pages/Users/CartGym'))
const DetailsHoaDon = lazy(() => import('./pages/DetailsHoaDon'))
function App() {
  return (
    <>
      <Router>

        <AccessibleNavigationAnnouncer />
        <Switch>
          <Route exact path="/listTinTuc/detailstintuc/:id" component={DetailsTinTuc} />
          <Route path="/home" component={homeUsers} />
          {/* <Route path="/listHocVien" component={Login1} /> */}
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/forgot-password" component={homeUsers} />

       
          {/* Các Route cho trang User */}
          {/* Wrapped routes */}
          <Route path="/admin" component={Login} />
          <Route path="/homegym" component={HomeGym} />
          <Route path="/aboutgym" component={AboutGym} />
          <Route path="/clbgym" component={CLBGym} />
          <Route path="/calendargym" component={CalendarGym} />
          <Route path="/contactgym" component={ContactGym} />
          <Route path="/the-news" component={TheNewsGym} />
          <Route path="/details=/" component={DetailsTheNews} />
          <Route path="/clb-khoatap/" component={KhoaTapGym} />
          <Route path="/details-khoatap/" component={DetailsKhoaTapGym} />
          <Route path="/details-hoadon/" component={DetailsHoaDon} />

          {/* //User profile */}
          <Route path="/login-users" component={LoginUserGym} />
          <Route path="/register-users" component={RegisterUserGym} />
          <Route path="/profile-user-gym/" component={ProfileUser} />
          <Route path="/cart-gym/" component={CartGym} />
          {/* Place new routes over this */}
          <Route path="/app" component={Layout} />
          {/* If you have an index page, you can remothis Redirect */}
          {/* cái này là chạy mặc định khi mở project */}
          <Redirect exact from="/" to="/homegym" />
        </Switch>
        <Route path="/user/home" element={<UI_User />} />

      </Router>
    </>
  )
}

export default App
