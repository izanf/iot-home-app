import { useState } from 'react'
import { BsLightbulb, BsLightbulbOff } from 'react-icons/bs'
import { setValue } from 'services/firebase'

import type { RoomProps } from './types'

import { Box, Switch, Text } from 'components'

const Room = ({ data }: RoomProps) => {
  const [status, setStatus] = useState<boolean>(false)
  const Icon = status ? BsLightbulb : BsLightbulbOff
  const entities = Object.keys(data)

  const handleChange = async (value: boolean) => {
    setStatus(value)

    await setValue('lights', 'bedroom', value)
  }

  console.log(data)

  return (
    <Box
      display="grid"
      gridTemplateRows="1fr"
      gridTemplateColumns="1fr 1fr"
      gridGap=".5rem"
      p="1.5rem 1rem"
    >
      {entities.map((entity: string, index: number) => (
        <Box
          key={index}
          background="white"
          borderRadius=".5rem"
          p="1rem"
        >
          <Box display="flex" justifyContent="space-between" pb="2rem">
            <Icon />
            <Switch value={status} onChange={handleChange} />
          </Box>
          <Text>{entity}</Text>
        </Box>
      ))}
    </Box>
  )
}

export default Room
