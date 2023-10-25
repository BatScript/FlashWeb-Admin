import { TextArea, TextFieldInput } from '@radix-ui/themes'
import TabInput from '../tabInput'

const FormInput = ({ type, name }) => {
  switch (type) {
    case 'input':
      return (
        <TextFieldInput
          name={name}
          color="blue"
          variant="soft"
          placeholder="Enter title of Blog"
        />
      )
    case 'textArea':
      return (
        <TextArea
          name={name}
          color="blue"
          variant="soft"
          placeholder="Enter description of Blog..."
        />
      )
    case 'tabInput':
      return <TabInput name={name} />
  }
}

export default FormInput
