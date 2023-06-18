import styled from 'styled-components'

import type { RoomProps } from '../../types/types'

import { Box } from 'components'
import Entity from './Entity'

const EntitiesBox = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem .5rem;

  & > div {
    min-width: 150px;
  }

  @media (max-width: 568px) {
    & > div {
      min-width: calc(50% - 3rem);
    }
  }
`

const Room = ({ data, handleChange }: RoomProps) => {
  const entities = Object.keys(data)

  return (
    <EntitiesBox>
      {entities.map((entity: string, index: number) => (
        <Entity key={index} data={data[entity]} name={entity} handleChange={handleChange} />
      ))}
    </EntitiesBox>
  )
}

export default Room
