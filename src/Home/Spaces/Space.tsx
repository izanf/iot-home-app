import { useState } from 'react'
import { doc, setDoc } from 'firebase/firestore'
import { Box, Switch, Text } from 'components'
import { BsLightbulb, BsLightbulbOff } from 'react-icons/bs'

import db from 'services/firebase'

const Space = () => {
  const [status, setStatus] = useState<boolean>(false)
  const Icon = status ? BsLightbulb : BsLightbulbOff

  const handleChange = async (value: boolean): Promise<void> => {
    setStatus(value)
    await setDoc(doc(db, 'lights', 'bedroom'), {
      value
    })
  }

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
