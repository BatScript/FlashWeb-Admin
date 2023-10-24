import { Flex } from '@radix-ui/themes'
import SideBar from './sidebar'
import MainSection from './mainSection'

const Layout = ({ children }) => {
  return (
    <Flex className="h-full">
      <SideBar />
      <MainSection>{children}</MainSection>
    </Flex>
  )
}

export default Layout
