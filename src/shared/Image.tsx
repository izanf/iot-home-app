import React from 'react'
import styled from 'styled-components'

interface ImageProps {
  src: string
  avatar: true
  size?: 'sm' | 'md' | 'lg'
}

const Figure = styled.figure<Omit<ImageProps, 'src'>>(({ avatar, size }) => `
  width: ${size}px;
  ${avatar ? 'border-radius: 100%;' : ''}
  overflow: hidden;
`)

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Image = ({ avatar, size = 'md', ...props }: ImageProps) => (
  <Figure avatar={avatar} size={size}>
    <Img {...props} />
  </Figure>
)

export default Image
