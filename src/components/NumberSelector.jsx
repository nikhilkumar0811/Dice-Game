import { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({ setError, error, selectedNumber, setSelectedNumber }) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <NumberSelectorContainer>
      {error && <p className="error">{error}</p>}
      <div className="flex">
        {arrNumber.map((value) => (
          <Box 
            isSelected={value === selectedNumber}
            key={value}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p className="select">Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .flex {
    display: flex;
    gap: 24px;
    margin-bottom: 16px;
  }

  .select {
    font-size: 18px;
    font-weight: 500;
  }

  .error {
    color: red;
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  cursor: pointer;
`;
