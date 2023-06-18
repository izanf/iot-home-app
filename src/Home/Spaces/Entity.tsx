import * as Icons from 'react-icons/bs'

import type { EntityType } from '../../types/types'

import { Box, Text } from 'components'
import * as Components from 'components'

import entities from './entities'

interface EntityProps {
  data: EntityType
  name: string
  handleChange: (entity: string, value: boolean) => any
}

const Entity = ({ data, name, handleChange }: EntityProps) => {
  const { status, icon, type, level } = data
  const Icon = (Icons as any)[icon] ?? Icons.BsQuestion
  const selectedEntity = (entities as any)[type]
  const EntityComponent = (Components as any)[selectedEntity ?? 'Switch']

  const handleValue = (value: boolean) => {
    handleChange(name, value)
  }

  return (
    <Box
      background="white"
      borderRadius=".5rem"
      p="1rem"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      mx=".5rem"
      mb="1rem"
    >
      <Box display="flex" justifyContent="space-between" pb="2rem">
        <Icon size="1.5rem" />
        <EntityComponent value={status} level={level} onChange={handleValue} />
      </Box>
      <Text>{name.split('_').join(' ')}</Text>
    </Box>
  )
}

export default Entity
