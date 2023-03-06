import styled from "styled-components";

export const CustomContainer = styled.section`
  box-sizing: border-box;

  @media screen and (min-width: 800px) {
    max-width: auto;
    width: 100%;
    margin: 0 0;
    padding: 0 15px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 950px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1150px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1400px) {
    max-width: 1350px;
    margin: 0 auto;
  }

  @media screen and (max-width: 800px) {
    max-width: auto;
    width: 100%;
    margin: 0;
    padding: 0 15px;
  }
`;

export const ChildContainer = styled.div`
  width: calc(100% - 200px);
  padding: 0 0 0 15px;
  box-sizing: border-box;

  @media screen and (max-width: 1000px) {
    width: calc(100% - 150px);
  }
  @media screen and (max-width: 800px) {
    width: calc(100% - 70px);
  }
  @media screen and (max-width: 500px) {
    width: calc(100% - 30px);
  }
`;
