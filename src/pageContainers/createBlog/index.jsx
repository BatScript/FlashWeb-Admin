import { Button, Text } from '@radix-ui/themes'
import Layout from '../../components/layout'
import FormInput from '../../components/ui/formInput'
import { formSections } from './config/formFields'
import React, { useState } from 'react'

const CreateBlog = () => {
  const [formValue, setFormValue] = useState([])
  const handleFormChange = (valObj) => {
    setFormValue((prev) => ({ ...prev, ...valObj }))
  }
  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(formValue)
  }
  return (
    <Layout>
      <form
        className="flex flex-col gap-y-4 w-11/12 mx-auto"
        onSubmit={handleFormSubmit}
      >
        {formSections.map((section, index) => {
          const { title, config } = section
          return (
            <React.Fragment key={index}>
              <Text>{title}</Text>
              {config.map((ele, index) => {
                const { type, placeHolder, keyName } = ele
                return (
                  <FormInput
                    type={type}
                    placeholder={placeHolder}
                    key={index}
                    name={keyName}
                    onChange={handleFormChange}
                  />
                )
              })}
            </React.Fragment>
          )
        })}
        <Button type="submit" variant="outline">
          Submit
        </Button>
      </form>
    </Layout>
  )
}

export default CreateBlog
