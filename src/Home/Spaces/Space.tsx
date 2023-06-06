import { useState, useEffect } from 'react'
import { Box, Switch, Text } from 'components'
import { BsLightbulb, BsLightbulbOff } from 'react-icons/bs'

import { ref, onValue } from 'firebase/database'
import db, { setValue } from 'services/firebase'

const Space = () => {
  const [status, setStatus] = useState<boolean>(false)
  const Icon = status ? BsLightbulb : BsLightbulbOff

  const handleChange = async (value: boolean) => {
    setStatus(value)
    await setValue('lights', 'bedroom', value)
  }

  const getValue = () => {
    const objRef = ref(db, 'lights/bedroom')

    onValue(objRef, (snapshot) => {
      const data = snapshot.val()

      setStatus(data)
    })
  }

  useEffect(getValue, [])

  return (
    <Box
      display="grid"
      gridTemplateRows="1fr"
      gridTemplateColumns="1fr 1fr"
      gridGap=".5rem"
      p="1.5rem 1rem"
    >
      <Box
        background="white"
        borderRadius=".5rem"
        p="1rem"
      >
        <Box display="flex" justifyContent="space-between" pb="2rem">
          <Icon />
          <Switch value={status} onChange={handleChange} />
        </Box>
        <Text>Smart Light</Text>
      </Box>
    </Box>
  )
}

export default Space
