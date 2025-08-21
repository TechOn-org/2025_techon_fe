import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    
    padding: 14px 16px;
    font-size: 14px;
    border-width: 0px;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    ${(props) =>
      props.height &&
      `
      height: ${props.height}px;
    `}
    background-color: ${(props) => props.$backgroundColor || "transparent"};
    color: ${(props) => props.color};
`;

function PostButton(props) {
  const { height, title, onClick, backgroundColor, color } = props;

  return (
    <StyledButton
      onClick={onClick}
      $backgroundColor={backgroundColor} 
      color={color}
    >
      {title || "button"}
    </StyledButton>
  );
}

export default PostButton;
