import { BlockNoteView, useBlockNote } from '@blocknote/react'
import Layout from '../../components/layout'

const CreateBlog = () => {
  const editor = useBlockNote({})
  return (
    <Layout>
      <BlockNoteView className='w-2/3 ml-auto' editor={editor} theme="light" />
    </Layout>
  )
}

export default CreateBlog
