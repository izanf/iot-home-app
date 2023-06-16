export type Entity = {
  status: boolean,
  level?: number
}

export interface RoomProps {
  data: {
    [entity: string]: Entity
  }
}
