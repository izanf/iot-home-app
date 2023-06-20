import styled from 'styled-components'

import Profile from './Profile/Profile'
import Spaces from './Spaces/Rooms'

import { Button } from 'components'
import useAuthentication from 'state/authContext'

const Wrapper = styled.div``

const Home = () => {
  const { signout } = useAuthentication()

  const handleSignout = () => {
    const cb = () => {
      console.log('signing out...')
    }

    signout(cb)
  }

  return (
    <Wrapper>
      <Profile />
      <Spaces />
      <Button onClick={handleSignout}>Logout</Button>
    </Wrapper>
  )
}

export default Home
