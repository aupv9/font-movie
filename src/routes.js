import React from 'react';
import Login from './views/pages/login/Login';


const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/base/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));

const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));

const MoivePage = React.lazy(() => import('./layout/movie'));
const GenrePage = React.lazy(() => import('./layout/genre'));
const Director = React.lazy(() => import('./layout/director'));
const Actor = React.lazy(() => import('./layout/actor'));
const UserPage =  React.lazy(() => import('./layout/user'));
const MemberPage =  React.lazy(() => import('./layout/member'));
const AccountPage =  React.lazy(() => import('./layout/account'));
const ReportPage =  React.lazy(() => import('./layout/report'));



const EditMoive =React.lazy(() => import('./layout/movie/Edit-Moive'));
const EditGenre= React.lazy(() => import('./layout/genre/Edit-Genre'));
const EditDirector= React.lazy(() => import('./layout/director/Edit-Director'));
const EditActor= React.lazy(() => import('./layout/actor/Edit-Actor'));
const EditAccount= React.lazy(() => import('./layout/account/Edit-Account'));
const EditUser= React.lazy(() => import('./layout/user/Edit-User'));
const EditMember= React.lazy(() => import('./layout/member/Edit-Member'));
const EditReport= React.lazy(() => import('./layout/report/Edit-Report'));


const CreateMovie= React.lazy(() => import('./layout/movie/Create-Movie'));
const CreateGenre= React.lazy(() => import('./layout/genre/Create-Genre'));
const CreateDirector= React.lazy(() => import('./layout/director/Create-Director'));



const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },

  { path: '/movie', name: 'Movie', component: MoivePage, exact: true },
  { path: '/movie/list-movie', name: 'List Movie', component: MoivePage, exact: true },
  { path: '/movie/list-movie/edit/:id', name: 'Edit Movie', component:EditMoive },
  { path: '/movie/list-movie/create', name: 'Create Movie', component:CreateMovie },

  { path: '/genre', name: 'Genre', component:GenrePage , exact: true },
  { path: '/genre/list-genre', name: 'List Genre', component: GenrePage, exact: true },
  { path: '/genre/list-genre/edit/:id', name: ' EditGenre', component:EditGenre },
  { path: '/genre/list-genre/create', name: 'Create Genre', component:CreateGenre },


  { path: '/director', name: 'Director', component:Director , exact: true },
  { path: '/director/list-director', name: 'List Director', component: Director, exact: true },
  { path: '/director/list-director/edit/:id', name: 'Edit Director', component:EditDirector},
  { path: '/director/list-director/create', name: 'Create Director', component:CreateDirector},


  { path: '/actor', name: 'Actor', component:Actor , exact: true },
  { path: '/actor/list-actor', name: 'List actor', component: Actor, exact: true },
  { path: '/actor/list-actor/edit/:id', name: 'Edit actor', component:EditActor},


  { path: '/user', name: 'User', component:UserPage , exact: true },
  { path: '/user/list-user', name: 'List user', component: UserPage, exact: true },
  { path: '/user/list-user/edit/:id', name: 'Edit user', component:EditUser},


  { path: '/member', name: 'Member Package', component:MemberPage , exact: true },
  { path: '/member/list-member', name: 'Member Package', component: MemberPage, exact: true },
  { path: '/member/list-member/edit/:id', name: 'Edit Member Package', component:EditMember},
  

  { path: '/account', name: 'Account', component:AccountPage , exact: true },
  { path: '/account/list-account', name: 'List Account', component: AccountPage, exact: true },
  { path: '/account/list-account/edit/:id', name: 'Edit Account', component:EditAccount},

  { path: '/report', name: 'Report', component:ReportPage , exact: true },
  { path: '/report/list-report', name: 'List Report', component: ReportPage, exact: true },
  { path: '/report/list-report/edit/:id', name: 'Edit Report', component:EditReport},

  { path: '/login', name: 'Login', component:Login , exact: true }

  // { path: '/base', name: 'Base', component: Cards, exact: true },
  // { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  // { path: '/base/cards', name: 'Cards', component: Cards },


  // { path: '/base/carousels', name: 'Carousel', component: Carousels },
  // { path: '/base/collapses', name: 'Collapse', component: Collapses },
  // { path: '/base/forms', name: 'Forms', component: BasicForms },
  // { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  // { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  // { path: '/base/navbars', name: 'Navbars', component: Navbars },
  // { path: '/base/navs', name: 'Navs', component: Navs },
  // { path: '/base/paginations', name: 'Paginations', component: Paginations },
  // { path: '/base/popovers', name: 'Popovers', component: Popovers },
  // { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  // { path: '/base/switches', name: 'Switches', component: Switches },
  // { path: '/base/tables', name: 'Tables', component: Tables },
  // { path: '/base/tabs', name: 'Tabs', component: Tabs },
  // { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  // { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  // { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  // { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  // { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  // { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  // { path: '/charts', name: 'Charts', component: Charts },
  // { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  // { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  // { path: '/icons/flags', name: 'Flags', component: Flags },
  // { path: '/icons/brands', name: 'Brands', component: Brands },
  // { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  // { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  // { path: '/notifications/badges', name: 'Badges', component: Badges },
  // { path: '/notifications/modals', name: 'Modals', component: Modals },
  // { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  // { path: '/widgets', name: 'Widgets', component: Widgets },
  // { path: '/users', exact: true,  name: 'Users', component: Users },
  // { path: '/users/:id', exact: true, name: 'User Details', component: User }
];

export default routes;
