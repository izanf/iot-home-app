import styled from 'styled-components'

import { Image } from 'shared'

const Wrapper = styled.div``

const Title = styled.h1``

const Profile = () => (
  <Wrapper>
    <Title>Hi, Izanderson</Title>
    <Image avatar src="https://franchisematch.com/wp-content/uploads/2015/02/john-doe.jpg" />
  </Wrapper>
)

export default Profile
