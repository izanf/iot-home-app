export type EntityType = {
  status: boolean,
  level?: number,
  type: string,
  icon: string
}

export interface RoomProps {
  data: {
    [entity: string]: EntityType
  },
  roomName: string
}
