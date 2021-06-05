import React from "react";
import styled from "styled-components";

const emptyPanel = () => {
  return <EmptyPanel>Empty Panel</EmptyPanel>;
};

export default emptyPanel;

const EmptyPanel = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 96vh;
  background: #2b2b2b;
  color: white;
`;
