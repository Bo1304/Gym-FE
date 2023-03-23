import { lazy } from 'react'

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import('../pages/Dashboard'))
const Forms = lazy(() => import('../pages/Forms'))
const FormKhoaTap = lazy(() => import('../pages/FormKhoaTap'))
const FormTinTuc = lazy(() => import('../pages/FormTinTuc'))
const FormCLB = lazy(() => import('../pages/FormCLB'))
const FormPT = lazy(() => import('../pages/FormPT'))

const ListKhoaTap = lazy(() => import('../pages/ListKhoaTap'))
const ListHocVien = lazy(() => import('../pages/ListHocVien'))
const ListPT = lazy(() => import('../pages/ListPT'))
const ListCLB = lazy(() => import('../pages/ListCLB'))
const ListTinTuc = lazy(() => import('../pages/ListTinTuc'))
const ListHoaDon = lazy(() => import('../pages/ListHoaDon'))
const Cards = lazy(() => import('../pages/Cards'))
const Charts = lazy(() => import('../pages/Charts'))
const Buttons = lazy(() => import('../pages/Buttons'))
const Modals = lazy(() => import('../pages/Modals'))
const Tables = lazy(() => import('../pages/Tables'))
const Page404 = lazy(() => import('../pages/404'))
const Blank = lazy(() => import('../pages/Blank'))
const DetailsTinTuc = lazy(() => import('../pages/DetailsTinTuc'))

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/forms',
    component: Forms,
  },
  {
    path: '/cards',
    component: Cards,
  },
  {
    path: '/charts',
    component: Charts,
  },
  {
    path: '/buttons',
    component: Buttons,
  },
  {
    path: '/modals',
    component: Modals,
  },
  {
    path: '/tables',
    component: Tables,
  },
  {
    path: '/formKhoaTap',
    component: FormKhoaTap,
  },
  {
    path: '/formTinTuc',
    component: FormTinTuc,
  },
  {
    path: '/formCLB',
    component: FormCLB,
  },
  {
    path: '/formPT',
    component: FormPT,
  },


  ////////////////////////////////////////////////////////////////////////////
  // LIST GYM
  {
    path: '/listKhoaTap',
    component: ListKhoaTap,
  },
  {
    path: '/listHocVien',
    component: ListHocVien,
  },

  {
    path: '/listCLB',
    component: ListCLB,
  },
  {
    path: '/listPT',
    component: ListPT,
  },
  {
    path: '/listTinTuc',
    component: ListTinTuc,
  },
  {
    path: '/listHoaDon',
    component: ListHoaDon,
  },
  // {
  //   path: '/detailstintuc',
  //   component: DetailsTinTuc,
  // },
 
    // LIST GYM

  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/blank',
    component: Blank,
  },
  // {
  //   path: '/app/my-page', // the url that will be added to /app/
  //   component: MyPage, // the page component you jsut imported
  // }
  
]
// const MyPage = lazy(() => import('../pages/MyPage'))
export default routes
