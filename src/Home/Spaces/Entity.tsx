import * as Icons from 'react-icons/fa'

import type { EntityType } from '../../types/types'

import { Box, Switch, Text } from 'components'

interface EntityProps {
  data: EntityType
  name: string
  handleChange: (entity: string, value: boolean) => any
}

const Entity = ({ data, name, handleChange }: EntityProps) => {
  const { status, icon } = data
  const Icon = (Icons as any)[icon]

  const handleValue = (value: boolean) => {
    handleChange(name, value)
  }

  return (
    <Box
      background="white"
      borderRadius=".5rem"
      p="1rem"
    >
      <Box display="flex" justifyContent="space-between" pb="2rem">
        <Icon />
        <Switch value={status} onChange={handleValue} />
      </Box>
      <Text>{name}</Text>
    </Box>
  )
}

export default Entity
