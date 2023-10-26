import { TextArea, TextFieldInput } from '@radix-ui/themes'
import TabInput from '../tabInput'
import '@blocknote/core/style.css'
import { BlockNoteView, useBlockNote } from '@blocknote/react'
import { theme } from '../../../pageContainers/createBlog/config/blockNoteConfig'

const FormInput = ({ type, name, onChange, placeholder }) => {
  const editor = useBlockNote({
    // Listens for when the editor's contents change.
    onEditorContentChange: (editor) => {
      // Converts the editor's contents from Block objects to Markdown and
      // saves them.
      const saveBlocksAsMarkdown = async () => {
        const markdown = await editor.blocksToMarkdown(editor.topLevelBlocks)
        onChange({})
      }
      saveBlocksAsMarkdown()
    }
  })
  switch (type) {
    case 'textField':
      return (
        <TextFieldInput
          name={name}
          onChange={(e) => onChange(e, { [name]: e.target.value })}
          color="blue"
          variant="soft"
          placeholder={placeholder}
        />
      )
    case 'textArea':
      return (
        <TextArea
          name={name}
          onChange={(e) => onChange(e, { [name]: e.target.value })}
          color="blue"
          variant="soft"
          placeholder={placeholder}
        />
      )
    case 'tabInput':
      return <TabInput name={name} onChange={(val) => onChange(val)} />
    case 'blockNote':
      return (
        <BlockNoteView
          placeholder={placeholder}
          className=""
          editor={editor}
          theme={theme}
          onChange={(val) => console.log(val)}
        />
      )
    default:
      return (
        <TextFieldInput
          name={name}
          onChange={(e) => onChange(e, { [name]: e.target.value })}
          color="blue"
          variant="soft"
          placeholder={placeholder}
        />
      )
  }
}

export default FormInput
