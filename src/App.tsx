import React from "react";
import styled from "styled-components";
import SearchAndFilter from "./components/SearchAndFilter";
import Table from "./components/Table";

function App() {
  return (
    <Container>
      <TitlePage>EXAMPLE WITH SEARCH AND FILTER</TitlePage>
      <SearchAndFilter />
      <Separator />
      <Table />
    </Container>
  );
}

export default App;

const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 2rem;
`;

const TitlePage = styled.div`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
  font-style: normal;
`;

const Separator = styled.div`
  height: 0;
  border: 1px solid gray;
  width: 100%;
`;
