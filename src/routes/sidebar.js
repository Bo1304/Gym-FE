/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
// function requireAuth(to, from, next) {
//   const isLoggedIn = localStorage.getItem('User-GYM');
//   if (isLoggedIn) {
//     next();
//   } else {
//     next('/login');
//   }
// }
const routes = [
  {
    path: '/app/dashboard', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Dashboard', // name that appear in Sidebar
  },
  // {
  //   path: '/app/forms',
  //   icon: 'FormsIcon',
  //   name: 'Forms',
  // },
  // {
  //   path: '/app/cards',
  //   icon: 'CardsIcon',
  //   name: 'Cards',
  // },
  // {
  //   path: '/app/charts',
  //   icon: 'ChartsIcon',
  //   name: 'Charts',
  // },
  // {
  //   path: '/app/buttons',
  //   icon: 'ButtonsIcon',
  //   name: 'Buttons',
  // },
  // {
  //   path: '/app/modals',
  //   icon: 'ModalsIcon',
  //   name: 'Modals',
  // },
  // {
  //   path: '/app/tables',
  //   icon: 'TablesIcon',
  //   name: 'Tables',
  // },
  {
    path: '/app/formKhoaTap',
    icon: 'ButtonsIcon',
    name: 'Khóa Tập',
    
  },
  {
    path: '/app/formTinTuc',
    icon: 'FormsIcon',
    name: 'Tin Tức',
  },
  {
    path: '/app/formCLB',
    icon: 'CardsIcon',
    name: 'Câu lạc bộ',
  },
  {
    path: '/app/formPT',
    icon: 'ChartsIcon',
    name: 'PT',
  },



  // LIST GYM

  {
    icon: 'PagesIcon',
    name: 'Danh Sách',
    routes: [
      // submenu
      {
        path: 'listKhoaTap',
        name: 'Khóa Tập',
      },
      {
        path: 'listHocVien',
        name: 'Học Viên',
      },
   
      
      {
        path: 'listCLB',
        name: 'CLB',
      },
      {
        path: 'listPT',
        name: 'PT',
      },
      {
        path: 'listTinTuc',
        name: 'Tin Tức',
      },
      {
        path: 'listHoaDon',
        name: 'Hóa Đơn',
      },
  
   
    ],
  },
  // {
  //   icon: 'TablesIcon',
  //   name: 'Pages',
  //   routes: [
  //     // submenu
  //     {
  //       path: '/login',
  //       name: 'Login',
  //     },
  //     {
  //       path: '/create-account',
  //       name: 'Create account',
  //     },
  //     {
  //       path: '/forgot-password',
  //       name: 'Forgot password',
  //     },
  //     {
  //       path: '/app/404',
  //       name: '404',
  //     },
  //     {
  //       path: '/app/blank',
  //       name: 'Blank',
  //     },
  //     // {
  //     //   path: '/app/my-page', // /app + the url you added in routes/index.js
  //     //   icon: 'HomeIcon', // the component being exported from src/icons/index.js
  //     //   name: 'My Page', // name that appear in Sidebar
  //     // },
  //   ],
  // },
]

export default routes
