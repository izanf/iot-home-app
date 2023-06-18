import styled from 'styled-components'

const Wrapper = styled.div`
  width: 30px;
  height: 50px;
  position: relative;
  border: 2px solid ${({ theme }) => theme.colors.silver};
  border-radius: 4px;
`

const Level = styled.div<{ level: number }>`
  background: ${({ theme }) => theme.colors.whisper};
  width: 100%;
  height: ${({ level }) => level}%;
  position: absolute;
  bottom: 0;
  transition: all .2s ease-in-out;
`

interface WaterLevelProps {
  level: number
}

const WaterLevel = ({ level }: WaterLevelProps) => (
  <Wrapper>
    <Level level={level} />
  </Wrapper>
)

export default WaterLevel
