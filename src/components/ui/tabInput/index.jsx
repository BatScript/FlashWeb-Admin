import { Badge, Box, TextFieldInput, TextFieldRoot } from '@radix-ui/themes'
import { useState } from 'react'

const TabInput = ({ onChange, placeholder }) => {
  const [keywords, setKeywords] = useState([])
  const [txtInput, setTxtInput] = useState()

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      addKeyWord(e.target.value)
      setTxtInput('')
    }
  }

  const addKeyWord = (val) => {
    setKeywords([...keywords, val])
    onChange([...keywords, val])
  }

  const Badges = ({ badges }) => {
    return (
      <Box className="flex gap-x-2 mb-2">
        {badges.map((ele, index) => {
          return (
            <Badge key={index} size="1" color="indigo">
              {ele}
            </Badge>
          )
        })}
      </Box>
    )
  }

  return (
    <div
      className={`rounded ${keywords.length > 0 ? 'border-2 p-4' : null}`}
      value={keywords}
    >
      <Badges badges={keywords} />
      <TextFieldRoot>
        <TextFieldInput
          enterKeyHint="gaand"
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          onChange={(e) => setTxtInput(e.target.value)}
          value={txtInput}
        />
      </TextFieldRoot>
    </div>
  )
}

export default TabInput
