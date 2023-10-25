import '@radix-ui/themes/styles.css'
import './App.css'
import Layout from './components/layout'
import { Theme, ThemePanel } from '@radix-ui/themes'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routerConfig } from './constants/routes'

function App() {
  return (
    <Theme
      accentColor="blue"
      grayColor="sand"
      radius="large"
      scaling="110%"
      className="h-full"
    >
      <RouterProvider router={createBrowserRouter(routerConfig)}>
        <Layout>Hello World</Layout>
        <ThemePanel />
      </RouterProvider>
    </Theme>
  )
}

export default App
