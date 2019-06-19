export interface Route {
  name: string,
  path: string,
  component: any,
}

const routes: Array<Route> = [
  {
    name: 'Home',
    path: '/',
    component: () => import('./views/home'),
  },
  {
    name: 'About',
    path: '/about',
    component: () => import('./views/about'),
  },
]

export default routes
