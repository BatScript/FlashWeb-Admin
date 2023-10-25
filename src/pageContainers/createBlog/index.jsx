import { BlockNoteView, useBlockNote } from '@blocknote/react'
import Layout from '../../components/layout'
import { theme } from './config/blockNoteConfig'
import '@blocknote/core/style.css'
import {
  Badge,
  Box,
  Text,
  TextArea,
  TextFieldInput,
  TextFieldRoot
} from '@radix-ui/themes'
import TabInput from '../../components/ui/tabInput'

const CreateBlog = () => {
  const editor = useBlockNote({})
  return (
    <Layout>
      <form className="flex flex-col gap-y-4 w-11/12 mx-auto">
        <Text weight="800">Meta Data for SEO</Text>
        <TextFieldInput
          color="blue"
          variant="soft"
          placeholder="Enter title of Blog"
        />
        <TextArea
          color="blue"
          variant="soft"
          placeholder="Enter description of Blog..."
        />
        <TextFieldInput
          color="blue"
          variant="soft"
          placeholder="Cover Image URL..."
        />
        <TextFieldInput
          color="blue"
          variant="soft"
          placeholder="Canonical URL..."
        />
        <TabInput />
        <Text>Start Writing Your Blog...</Text>
        <BlockNoteView
          placeholder="Enter text or type / for commands"
          className=" "
          editor={editor}
          theme={theme}
        />
      </form>
    </Layout>
  )
}

export default CreateBlog
