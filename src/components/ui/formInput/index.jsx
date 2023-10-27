import { TextArea, TextFieldInput } from '@radix-ui/themes'
import TabInput from '../tabInput'
import '@blocknote/core/style.css'
import TextEditor from '../textEditor'

const FormInput = ({ type, name, onChange, placeholder }) => {
  switch (type) {
    case 'textField':
      return (
        <TextFieldInput
          name={name}
          onChange={(e) => onChange({ [name]: e.target.value })}
          color="blue"
          variant="soft"
          placeholder={placeholder}
        />
      )
    case 'textArea':
      return (
        <TextArea
          name={name}
          onChange={(e) => onChange({ [name]: e.target.value })}
          color="blue"
          variant="soft"
          placeholder={placeholder}
        />
      )
    case 'tabInput':
      return (
        <TabInput
          placeholder={placeholder}
          name={name}
          onChange={(val) => onChange({ [name]: val })}
        />
      )
    case 'blockNote':
      return (
        <TextEditor name={name} onChange={(val) => onChange({ [name]: val })} />
      )
    default:
      return (
        <TextFieldInput
          name={name}
          onChange={(e) => onChange({ [name]: e.target.value })}
          color="blue"
          variant="soft"
          placeholder={placeholder}
        />
      )
  }
}

export default FormInput
