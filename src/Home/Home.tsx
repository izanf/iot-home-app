import styled from 'styled-components'

import Profile from './Profile/Profile'
import Spaces from './Spaces/Spaces'

const Wrapper = styled.div``

const Home = () => {
  return (
    <Wrapper>
      <Profile />
      <Spaces />
    </Wrapper>
  )
}

export default Home