import { Badge, Box, TextFieldInput, TextFieldRoot } from '@radix-ui/themes'
import { useState } from 'react'

const TabInput = ({ value }) => {
  const [keywords, setKeyWords] = useState([])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addKeyWord(e.target.value)
    }
  }

  const addKeyWord = (val) => {
    setKeyWords((prev) => [...prev, val])
  }
  return (
    <div className="rounded border-2 p-4" value={keywords}>
      <Box className="flex gap-x-2 mb-2">
        <Badge size="1" color="indigo">
          New
        </Badge>
        <Badge size="1" color="indigo">
          Old
        </Badge>
      </Box>
      <TextFieldRoot>
        <TextFieldInput
          onKeyDown={handleKeyDown}
          placeholder="Enter Keywords For Blogs…"
        />
      </TextFieldRoot>
    </div>
  )
}

export default TabInput
