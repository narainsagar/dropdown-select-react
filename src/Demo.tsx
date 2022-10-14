import React from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown/Dropdown";

const Main = styled("div")``;

export default function Demo() {
  const items = ["Please select", "Mangoes", "Apples", "Oranges"];
  const defaultItem = 'Please select';
  const styles = {
    color: '#000',
    width: 200,
    display: 'block',
    margin: '0 auto'
  };

  return (
    <Main>
      <h1>Custom Select/Dropdown</h1>
      <Dropdown items={items} defaultItem={defaultItem} styles={styles}/>
    </Main>
  )
}