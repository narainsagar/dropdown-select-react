import React from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown/Dropdown";

const Main = styled("div")`
  font-family: sans-serif;
  background: #f0f0f0;
`;

export default function Demo() {
  const items = ["Mangoes", "Apples", "Oranges"];
  const defaultItem = 'Mangoes';
  return (
    <Main>
      <h1>Custom Select/Dropdown</h1>
      <Dropdown items={items} defaultItem={defaultItem}/>
    </Main>
  )
}