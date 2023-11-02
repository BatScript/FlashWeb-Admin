import { Button, Container, Text, TextField } from '@radix-ui/themes'
import { GoogleLogin, googleLogout } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import { useState } from 'react'

const Authentication = ({ type = 'google' }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const loginSubmitHandler = (e) => {
    e.preventDefault()
    console.log('Submit')
  }

  const handleGAuthSuccess = async (data) => {
    setIsLoggedIn(true)
    console.log(data);
    const decoded = jwtDecode(data?.credential)
    console.log(decoded)
  }

  const handleLogout = () => {
    googleLogout()
    setIsLoggedIn(false)
  }
  switch (type) {
    case 'password':
      return (
        <Container className="m-4">
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
            <Button
              radius="large"
              className="p-5"
              variant="outline"
              highContrast
            >
              Submit
            </Button>
          </form>
        </Container>
      )
    default:
      return (
        <div className="p-4 max-w-md mx-auto mt-5 flex flex-col gap-y-2 border rounded-md">
          {!isLoggedIn ? (
            <GoogleLogin
              onSuccess={handleGAuthSuccess}
              onError={() => {
                console.log('Login Failed')
              }}
            />
          ) : null}
          {/* {isLoggedIn ? ( */}
          <Button onClick={handleLogout}>Logout</Button>
          {/* ) : null} */}
        </div>
      )
  }
}

export default Authentication
