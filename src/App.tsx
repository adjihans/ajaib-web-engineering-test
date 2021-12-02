import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchAndFilter from "./components/SearchAndFilter";
import Table from "./components/Table";
import { fetchUserPaginated } from "./services/fetchFunction";
import { PaginationType, RandomUser } from "./type.d";

function App() {
  const [randomUsers, setRandomUsers] = useState<RandomUser[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activePage, setActivePage] = useState<number>(1);
  const pageOptions = [1, 2, 3];

  const handleOnChangePage = async (type: string, page?: number) => {
    setIsLoading(true);
    let pageNumber = 0;
    switch (type) {
      case PaginationType.INCREMENT:
        if (activePage === pageOptions[0]) return;
        pageNumber = activePage + 1;
        setActivePage(activePage + 1);
        break;
      case PaginationType.DECREMENT:
        if (activePage === pageOptions[pageOptions.length - 1]) return;
        pageNumber = activePage - 1;
        setActivePage(activePage - 1);
        break;
      default:
        pageNumber = page!;
        setActivePage(page!);
    }
    const result = await fetchUserPaginated(pageNumber);
    setRandomUsers(result);
    setIsLoading(false);
  };

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
        <Table
          randomUsers={randomUsers}
          activePage={activePage}
          options={pageOptions}
          handleOnChangePage={handleOnChangePage}
        />
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
