import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 200px;
  background-color: #e6fff2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > h1 {
    display: block;
    font-size: 48px;
    color: #000;
    margin: 0px;
    text-transform: uppercase;
    @media (max-width: 500px) {
      font-size: 32px;
    }
  }
  > h2 {
    display: block;
    font-size: 28px;
    color: #000;
    margin: 0px;
    text-transform: uppercase;
    @media (max-width: 500px) {
      font-size: 24px;
    }
  }
`;
