import type { RoomProps } from './types'

import { Box } from 'components'
import Entity from './Entity'

const Room = ({ data, roomName }: RoomProps) => {
  const entities = Object.keys(data)

  return (
    <Box
      display="grid"
      gridTemplateRows="1fr"
      gridTemplateColumns="1fr 1fr"
      gridGap=".5rem"
      p="1.5rem 1rem"
    >
      {entities.map((entity: string, index: number) => (
        <Entity key={index} data={data[entity]} name={entity} roomName={roomName} />
      ))}
    </Box>
  )
}

export default Room