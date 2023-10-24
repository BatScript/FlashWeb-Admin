import { Button, Container, Text, TextField } from '@radix-ui/themes'

const Authentication = () => {
  const loginSubmitHandler = (e) => {
    e.preventDefault()
    console.log('Submit')
  }
  return (
    <Container className='m-4'>
      <Text size="5" className="block text-center">
        Login
      </Text>
      <form
        className="p-4 max-w-md mx-auto mt-5 flex flex-col gap-y-2 border rounded-md"
        onSubmit={loginSubmitHandler}
      >
        <TextField.Input
          className="m-1"
          radius="large"
          variant="surface"
          placeholder="Enter your email..."
          size={'3'}
        />
        <TextField.Input
          className="m-1"
          radius="large"
          variant="surface"
          placeholder="Enter your password..."
          size={'3'}
        />
        <Button radius="large" className="p-5" variant="outline" highContrast>
          Submit
        </Button>
      </form>
    </Container>
  )
}

export default Authentication
