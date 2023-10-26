const metaDataFormConfig = [
  {
    placeHolder: 'Enter title of Blog...',
    keyName: 'title',
    type: 'textField'
  },
  {
    placeHolder: 'Enter description of Blog...',
    keyName: 'description',
    type: 'textArea'
  },
  {
    placeHolder: 'Cover Image URL...',
    keyName: 'coverImg',
    type: 'textField'
  },
  {
    placeHolder: 'Canonical URL...',
    keyName: 'canonical',
    type: 'textField'
  }
]

const contentFormConfig = [
  {
    placeHolder: 'Enter text or type / for commands',
    keyName: 'blog',
    type: 'blockNote'
  }
]

export const formSections = [
  {
    title: 'Enter MetaData',
    config: metaDataFormConfig
  },
  {
    title: 'Enter Content',
    config: contentFormConfig
  }
]
