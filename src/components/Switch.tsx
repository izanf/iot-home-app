import { useState } from 'react'
import styled from 'styled-components'

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 28px;

  input { 
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + span {
      background-color: #2196F3;
    }

    &:checked + span:before {
      -webkit-transform: translateX(32px);
      -ms-transform: translateX(32px);
      transform: translateX(32px);
    }
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.whisper};
    -webkit-transition: .2s;
    transition: .2s;
    border-radius: 28px;

    &:before {
      border-radius: 100%;
      position: absolute;
      content: "";
      height: 20px;
      width: 20px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: .2s;
      transition: .2s;
    }
  }
`

interface ISwitch {
  value?: boolean
  onChange: (value: boolean) => void
}

const Switch = ({ value, onChange }: ISwitch) => {
  const [status, setStatus] = useState<boolean>(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target

    setStatus(checked)
    onChange(checked)
  }

  return (
    <Label>
      <input type="checkbox" checked={value ?? status} onChange={handleChange} />
      <span className="slider round"></span>
    </Label>
  )
}

export default Switch
