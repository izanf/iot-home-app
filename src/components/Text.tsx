import styled from 'styled-components'
import { flexbox, typography } from 'styled-system'
import type { FlexboxProps, TypographyProps } from 'styled-system'

interface IText extends TypographyProps, FlexboxProps, React.HTMLAttributes<HTMLElement> {
  sizing?: string
}

const Text = styled.span<IText>`
  ${flexbox}
  ${typography}
  font-size: ${({ theme, sizing = 'md' }) => theme.sizing[sizing]};
`

export default Text
