import styled from 'styled-components'

const getLevelColor = (level: number) => {
  if (level > 55) return '#6FB86D'
  if (level > 40) return '#FCAE39'
  return '#FF4C4B'
}

const Wrapper = styled.div`
  width: 30px;
  height: 50px;
  position: relative;
  border: 2px solid ${({ theme }) => theme.colors.silver};
  border-radius: 4px;
`

const Level = styled.div<{ level: number }>`
  background: ${({ level }) => getLevelColor(level)};
  width: 100%;
  height: ${({ level }) => level}%;
  position: absolute;
  bottom: 0;
  transition: all .2s ease-in-out;
`

const Percent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

interface WaterLevelProps {
  level: number
}

const WaterLevel = ({ level }: WaterLevelProps) => (
  <Wrapper>
    <Level level={level} />
    <Percent>
      <span>{level}%</span>
    </Percent>
  </Wrapper>
)

export default WaterLevel
