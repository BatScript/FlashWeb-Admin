import { Box, Button } from '@radix-ui/themes'
import { routerConfig } from '../../../constants/routes'
import { Link } from 'react-router-dom'
import { commonNames } from '../../../constants/common'
import styles from './sidebar.module.css'

const SideBar = () => {
  const { appName } = commonNames
  const Links = () => {
    // Renders the links in sidebar
    return (
      <nav className={`mt-2`}>
        {routerConfig.map((ele, index) => {
          const { path, label, sidebar } = ele
          return sidebar ? (
            <div className="p-2" key={index}>
              <Link className="block" to={path}>
                {label}
              </Link>
            </div>
          ) : null
        })}
      </nav>
    )
  }
  return (
    <>
      <div className={`p-4 ${styles.nav} max-w-1/4`}>
        <Button variant="outline">{appName}</Button>
        <Box>
          <Links />
        </Box>
      </div>
    </>
  )
}

export default SideBar
