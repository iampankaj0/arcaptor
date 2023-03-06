import React from "react";
import styled from "styled-components";

const MainSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
  width: 100%;
  padding: 15px;

  > div {
    font-size: 16px;
    text-align: center;
    font-weight: 600;
  }
`;

const AlertMessage = ({ text, color }) => {
  return (
    <MainSection>
      <div style={{ color: color }}>{text}</div>
    </MainSection>
  );
};

export default AlertMessage;
