import {
  ScoreMainContainer,
  HeadingContainer,
  Heading,
  ScoreContainer,
  SubHeading,
  Score,
} from './styledComponents'

const ScoreView = props => {
  const {score} = props
  return (
    <ScoreMainContainer>
      <HeadingContainer>
        <Heading>
          Rock <br /> Paper <br />
          Scissors
        </Heading>
      </HeadingContainer>
      <ScoreContainer>
        <SubHeading>Score</SubHeading>
        <Score>{score}</Score>
      </ScoreContainer>
    </ScoreMainContainer>
  )
}

export default ScoreView
