import { BlockNoteView, useBlockNote } from '@blocknote/react'
import { theme } from './config'

const TextEditor = ({ placeholder, onChange }) => {
  const editor = useBlockNote({
    onEditorContentChange: (editor) => {
      const saveBlocksAsMarkdown = async () => {
        const markdown = await editor.blocksToMarkdown(editor.topLevelBlocks)
        onChange(markdown)
      }
      saveBlocksAsMarkdown()
    }
  })
  return (
    <BlockNoteView
      placeholder={placeholder}
      className=""
      editor={editor}
      theme={theme}
    />
  )
}

export default TextEditor
