import { useState, useEffect } from 'react'
import db from 'services/firebase'
import { ref, onValue } from 'firebase/database'

import { Tabs } from 'components'
import Room from './Room'

const Rooms = () => {
  const [data, setData] = useState<any>({})
  const roomsArray = Object.keys(data)

  const getValue = () => {
    const objRef = ref(db, 'rooms')

    onValue(objRef, (snapshot) => {
      const data = snapshot.val()

      setData(data)
    })
  }

  useEffect(getValue, [])

  return (
    <Tabs tabs={roomsArray}>
      {roomsArray.map((room: string, index: number) => (
        <Room key={index} data={data[room]} roomName={room} />
      ))}
    </Tabs>
  )
}

export default Rooms
