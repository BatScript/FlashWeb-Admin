import Authentication from '../components/authentication'
import CreateBlog from '../pageContainers/createBlog'
import Home from '../pageContainers/home'

export const routerConfig = [
  {
    path: '/',
    label: 'Home',
    element: <Home />,
    sidebar: false
  },
  {
    path: '/compose',
    label: 'Create Post',
    element: <CreateBlog />,
    sidebar: true
  },
  {
    path: '/auth',
    label: 'Authentication',
    element: <Authentication />,
    sidebar: true
  }
]
