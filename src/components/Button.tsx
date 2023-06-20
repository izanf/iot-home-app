import styled from 'styled-components'

const Button = styled.button`
    background: ${({ theme }) => theme.colors.primary};
    border: none;
    border-radius: 4px;
    padding: 1rem 1.5rem;
    color: white;
`

export default Button
