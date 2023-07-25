import styled from 'styled-components'

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
