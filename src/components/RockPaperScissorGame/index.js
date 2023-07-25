import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  GameContainer,
  ScoreMainContainer,
  HeadingContainer,
  Heading,
  ScoreContainer,
  SubHeading,
  GameArea,
  GameImage,
  Score,
  Button,
  CloseButton,
  PopupImage,
  RulesButton,
  ResultContainer,
  GameResultView,
  YourContainer,
  PopContainer,
  ResultHeading,
  OpponentContainer,
  PlayAgainContainer,
  ResultMsg,
  PlayAgainButton,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RockPaperScissorGame extends Component {
  state = {score: 0, yourImg: '', oppImg: '', play: true, msg: ''}

  showResult = props => {
    let {score} = this.state
    const rand = Math.floor(Math.random() * 3)
    const yourImg = props.target.src
    const yourId = props.target.id
    const botImg = choicesList[rand].imageUrl
    const botId = choicesList[rand].id
    console.log(`${botId.toLowerCase()}Button`)
    let message = ''
    if (yourId === 'ROCK') {
      if (botId === 'SCISSORS') {
        score += 1
        message = 'YOU WON'
      } else if (botId === 'PAPER') {
        score -= 1
        message = 'YOU LOSE'
      } else {
        message = 'IT IS DRAW'
      }
    } else if (yourId === 'PAPER') {
      if (botId === 'ROCK') {
        score += 1
        message = 'YOU WON'
      } else if (botId === 'SCISSORS') {
        score -= 1
        message = 'YOU LOSE'
      } else {
        message = 'IT IS DRAW'
      }
    } else if (yourId === 'SCISSORS') {
      if (botId === 'PAPER') {
        score += 1
        message = 'YOU WON'
      } else if (botId === 'ROCK') {
        score -= 1
        message = 'YOU LOSE'
      } else {
        message = 'IT IS DRAW'
      }
    }

    this.setState(prevState => ({
      play: !prevState.play,
      score,
      yourImg,
      oppImg: botImg,
      msg: message,
    }))
  }

  playAgain = () => {
    this.setState(prevState => ({play: !prevState.play}))
  }

  render() {
    const {score, play, yourImg, oppImg, msg} = this.state
    return (
      <GameContainer>
        <ScoreMainContainer>
          <HeadingContainer>
            <Heading>Rock Paper Scissors</Heading>
          </HeadingContainer>
          <ScoreContainer>
            <SubHeading>Score</SubHeading>
            <Score>{score}</Score>
          </ScoreContainer>
        </ScoreMainContainer>
        <GameArea>
          {play && (
            <>
              <Button
                type="button"
                data-testid="rockButton"
                onClick={this.showResult}
              >
                <GameImage
                  src={choicesList[0].imageUrl}
                  id={choicesList[0].id}
                  alt={choicesList[0].id}
                  key={choicesList[0].id}
                />
              </Button>
              <Button
                type="button"
                data-testid=" scissorsButton"
                onClick={this.showResult}
              >
                <GameImage
                  src={choicesList[1].imageUrl}
                  id={choicesList[1].id}
                  alt={choicesList[1].id}
                  key={choicesList[1].id}
                />
              </Button>
              <Button
                type="button"
                data-testid="paperButton"
                onClick={this.showResult}
              >
                <GameImage
                  src={choicesList[2].imageUrl}
                  id={choicesList[2].id}
                  alt={choicesList[2].id}
                  key={choicesList[2].id}
                />
              </Button>
            </>
          )}

          {!play && (
            <ResultContainer>
              <GameResultView>
                <YourContainer>
                  <ResultHeading>YOU</ResultHeading>
                  <GameImage src={yourImg} alt="your choice" />
                </YourContainer>
                <OpponentContainer>
                  <ResultHeading>OPPONENT</ResultHeading>
                  <GameImage src={oppImg} alt="opponent choice" />
                </OpponentContainer>
              </GameResultView>

              <PlayAgainContainer>
                <ResultMsg>{msg}</ResultMsg>
                <PlayAgainButton type="button" onClick={this.playAgain}>
                  PLAY AGAIN
                </PlayAgainButton>
              </PlayAgainContainer>
            </ResultContainer>
          )}
        </GameArea>
        <Popup modal trigger={<RulesButton type="button">Rules</RulesButton>}>
          {close => (
            <PopContainer>
              <CloseButton type="button" onClick={() => close()}>
                <RiCloseLine size="30" />
              </CloseButton>

              <PopupImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </PopContainer>
          )}
        </Popup>
      </GameContainer>
    )
  }
}

export default RockPaperScissorGame
