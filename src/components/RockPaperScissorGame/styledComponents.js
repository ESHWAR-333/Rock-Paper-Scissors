import styled from 'styled-components'

export const GameContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`
export const ScoreMainContainer = styled.div`
  border: 2px solid #ffffff;
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 45px;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    max-width: 400px;
  }
`

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 50px;
  margin-top: 20px;
  width: 120px;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    width: 100px;
    margin-left: 30px;
  }
`

export const Heading = styled.h1`
  margin-bottom: 0px;
  margin-top: 0px;
  font-family: 'Bree Serif';
  color: #ffffff;
  font-weight: 500;
  font-size: 26px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
  width: 160px;
  margin-top: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: #ffffff;
  @media screen and (max-width: 768px) {
    margin-right: 30px;
    width: 100px;
  }
`
export const SubHeading = styled.p`
  color: #223a5f;
  font-weight: 700;
  font-family: 'Bree Serif';
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 0px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`
export const Score = styled.p`
  color: #223a5f;
  font-weight: 700;
  font-family: 'Roboto';
  font-size: 45px;
  margin-top: 0px;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`
export const Button = styled.button`
  background-color: transparent;
  border: 0px;
`
export const GameArea = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 430px;
  margin-bottom: 0px;
`
export const GameImage = styled.img`
  width: 190px;
  @media screen and (max-width: 768px) {
    width: 150px;
  }
`

export const RulesButton = styled.button`
  align-self: flex-end;
  margin-right: 45px;
  margin-bottom: 40px;
  background-color: #ffffff;
  font-family: 'Bree Serif';
  padding: 10px 20px;
  font-size: 15px;
  outline: none;
  border: 0;
  border-radius: 4px;
`

export const ResultContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  width: 650px;
  margin-bottom: 0px;
  @media screen and (max-width: 768px) {
    width: 450px;
  }
`
export const GameResultView = styled.div`
  display: flex;
  width: 500px;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    width: 350px;
  }
`
export const YourContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ResultHeading = styled.h1`
  color: #ffffff;
  font-weight: 500;
  font-size: 26px;
  font-family: 'Roboto';
`
export const OpponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PlayAgainContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ResultMsg = styled.p`
  color: #ffffff;
  font-weight: 500;
  font-size: 26px;
  font-family: 'Roboto';
`
export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  border: 0px;
  padding: 10px 40px;
  border-radius: 10px;
  color: #223a5f;
  font-family: 'Bree Serif';
`
export const PopupImage = styled.img`
  width: 550px;
  @media screen and (max-width: 768px) {
    width: 390px;
    padding: 0px;
  }
`
export const PopContainer = styled.div`
  width: 750px;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 60px;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    min-width: 400px;
    padding: 20px;
    justify-content: flex-start;
    height: 490px;
    max-width: 450px;
  }
`

export const CloseButton = styled.div`
  align-self: flex-end;
`
