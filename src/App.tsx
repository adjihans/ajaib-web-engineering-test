import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchAndFilter from "./components/SearchAndFilter";
import Table from "./components/Table";
import { fetchUserPaginated } from "./services/fetchFunction";
import { RandomUser } from "./type.d";

function App() {
  const [randomUsers, setRandomUsers] = useState<RandomUser[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const componentDidMount = async () => {
    setIsLoading(true);
    // default GET first page
    const result = await fetchUserPaginated(1);
    setRandomUsers(result);
    setIsLoading(false);
  };

  useEffect(() => {
    componentDidMount();
  }, []);

  return (
    <Container>
      <TitlePage>EXAMPLE WITH SEARCH AND FILTER</TitlePage>
      <SearchAndFilter />
      <Separator />
      {isLoading || !randomUsers?.length ? (
        <>Loading...</>
      ) : (
        <Table randomUsers={randomUsers} />
      )}
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
