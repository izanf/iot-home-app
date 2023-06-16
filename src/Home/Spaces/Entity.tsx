import * as Icons from 'react-icons/fa'

import { setValue } from 'services/firebase'

import type { EntityType } from './types'

import { Box, Switch, Text } from 'components'

interface EntityProps {
  data: EntityType
  name: string
  roomName: string
}

const Entity = ({ data, name, roomName }: EntityProps) => {
  const { status, icon } = data
  const Icon = (Icons as any)[icon]

  const handleChange = async (status: boolean) => {
    await setValue('rooms', `${roomName}/${name}`, { status, type: 'toggle', icon: 'FaLightbulb' })
  }

  return (
    <Box
      background="white"
      borderRadius=".5rem"
      p="1rem"
    >
      <Box display="flex" justifyContent="space-between" pb="2rem">
        <Icon />
        <Switch value={status} onChange={handleChange} />
      </Box>
      <Text>{name}</Text>
    </Box>
  )
}

export default Entity
