// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #ffffff;
`

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 550px;
  margin-top: 32px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    width: 95%;
    margin-top: 64%;
    margin-bottom: 64%;
  }
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #1e293b;
  font-weight: 500;
  font-size: 24px;
  margin: 0;
  line-height: 1.33;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 1.5;
  }
`

export const Description = styled.p`
  font-family: 'Roboto';
  color: #334155;
  font-size: 20px;
  text-align: center;
  font-size: 14px;
  margin-top: 12px;
  margin-bottom: 12px;
  line-height: 1.33;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 16px;
    line-height: 1.5;
  }
`

export const Image = styled.img`
  width: 100%;
  margin-top: 12px;

  @media screen and (min-width: 768px) {
    margin-top: 16px;
  }
`
export const ReactDes = styled.p`
  font-family: 'Roboto';
  color: #334155;
  font-size: 15px;
  font-weight: 400;
  padding: 20px;
  line-height: 1.5;
`

export const Button = styled.button`
  color: #ffffff;
  background-color: #1f81ff;
  font-family: 'Roboto';
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 24px;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  align-self: flex-start;

  @media screen and (min-width: 768px) {
    align-self: center;
  }
`
