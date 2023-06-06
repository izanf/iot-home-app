import styled from 'styled-components'

interface ImageProps {
  src: string
  avatar: true
  size?: number
}

const Figure = styled.figure<Omit<ImageProps, 'src'>>(({ avatar, size }) => `
  width: ${size}px;
  height: ${size}px;
  ${avatar ? 'border-radius: 100%;' : ''}
  overflow: hidden;
`)

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Image = ({ avatar, size = 64, ...props }: ImageProps) => (
  <Figure avatar={avatar} size={size}>
    <Img {...props} />
  </Figure>
)

export default Image
