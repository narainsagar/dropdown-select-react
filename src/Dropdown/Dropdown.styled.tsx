import styled from "styled-components";

export const DropdownContainer = styled("div")`
`;

export const DropdownHeader = styled("div")`
  margin-bottom: 5px;
  padding: 10px 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  color: #3faffa;
`;

export const DropdownListContainer = styled("div")`
  position: absolute;
  z-index: 100;
  width: inherit;
  max-height: 400px;
`;

export const DropdownList = styled("ul")`
  padding 5px 0;
  margin: 0;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  &:first-child {
    padding-top: 5px;
  }
  &:last-child {
    padding-bottom: 5px;
  }
`;

export const DropdownListItem = styled("li")`
  list-style: none;
  padding: 0 10px;
  &:hover {
    background: #3faffa;
  }

  button {
    border: none;
    background: transparent;
    box-shadow: none;
  }
`;
