import { Box, Image, Text } from 'components'

const Profile = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      p={24}
    >
      <Text
        flex={1}
        fontWeight="bold"
      >Hi, Izanderson</Text >
      <Image
        avatar
        src="https://franchisematch.com/wp-content/uploads/2015/02/john-doe.jpg"
        size={48}
      />
    </Box >
  )
}

export default Profile
