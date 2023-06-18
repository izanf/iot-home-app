import * as Icons from 'react-icons/fa'

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
  const Icon = (Icons as any)[icon]
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
    >
      <Box display="flex" justifyContent="space-between" pb="2rem">
        <Icon />
        <EntityComponent value={status} level={level} onChange={handleValue} />
      </Box>
      <Text>{name.split('_').join(' ')}</Text>
    </Box>
  )
}

export default Entity
