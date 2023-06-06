import React, { useState } from 'react'
import styled from 'styled-components'

import { Text } from 'components'

const Wrapper = styled.div`
  border-radius: 8px;
`

const Header = styled.ul`
  display: flex;
  position: relative;
  border-bottom: 3px solid ${({ theme }) => theme.colors.governorBay};
  list-style: none;
`

const HeaderItem = styled.li`
  text-align: center;
  padding: 1rem;
  cursor: pointer;
`

const Body = styled.div``

const Content = styled.div`
`

interface ITabs {
  tabs: string[]
  initialSelected?: number
  children: React.ReactElement[]
}

const Tabs = ({ tabs, initialSelected = 0, children }: ITabs) => {
  const [selected, setSelected] = useState<number>(initialSelected)

  const renderTabsContent = () => (
    children.map((child: React.ReactElement, index: number) => {
      if (selected === index) {
        return (
          <Content
            key={index}
          >{child}</Content>
        )
      }

      return null
    })
  )

  return (
    <Wrapper>
      <Header>
        {tabs.map((item: string, index: number) =>
          <HeaderItem
            key={index}
            onClick={() => { setSelected(index) }}
          >
            <Text
              sizing="md"
              color={selected === index ? 'white' : 'logan'}
            >
              {item}
            </Text>
          </HeaderItem>
        )}
      </Header>
      <Body>
        {renderTabsContent()}
      </Body>
    </Wrapper >
  )
}

export default Tabs
