import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchAndFilter from "./components/SearchAndFilter";
import Table from "./components/Table";
import { fetchUserPaginated } from "./services/fetchFunction";
import {
  Gender,
  Option,
  PaginationType,
  RandomUser,
  sortBy,
  SortInfo,
} from "./type.d";

function App() {
  const [randomUsers, setRandomUsers] = useState<RandomUser[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activePage, setActivePage] = useState<number>(1);
  const pageOptions = [1, 2, 3];
  const genderOptions = [
    { label: "All", value: Gender.ALL },
    { label: "female", value: Gender.FEMALE },
    { label: "male", value: Gender.MALE },
  ];
  const [gender, setGender] = useState<Option>(genderOptions[0]);
  const [keyword, setKeyword] = useState<string>("");
  const [sort, setSort] = useState<SortInfo | null>(null);

  const handleOnSelectGender = async (option: Option) => {
    setIsLoading(true);
    setGender(option);
    const payload = {
      page: 1,
      keyword: keyword,
      gender: option.value,
      sortBy: sort?.sortType,
      sortOrder: sort?.sortOrder,
    };
    const result = await fetchUserPaginated(payload);
    setRandomUsers(result);
    setIsLoading(false);
  };

  const handleOnChangeInputForm = (event: any) => {
    const newKeywords = event.target.value;
    setKeyword(newKeywords);
  };

  const handleOnClickSearchButton = async () => {
    setIsLoading(true);
    const payload = {
      page: 1,
      keyword: keyword,
      gender: gender.value,
      sortBy: sort?.sortType,
      sortOrder: sort?.sortOrder,
    };
    const result = await fetchUserPaginated(payload);
    setRandomUsers(result);
    setIsLoading(false);
  };

  const handleOnClickResetButton = () => {
    setGender(genderOptions[0]);
    setKeyword("");
    setSort(null);
  };

  const handleOnClickSortButton = async (sortOrder: string) => {
    let sortType = sortBy.ASC;
    if (sortOrder === sort?.sortOrder)
      sortType = sort.sortType === sortBy.ASC ? sortBy.DESC : sortBy.ASC;
    setSort({
      sortType,
      sortOrder,
    });
    setIsLoading(true);
    const payload = {
      page: 1,
      keyword: keyword,
      gender: gender.value,
      sortBy: sortType,
      sortOrder: sortOrder,
    };
    const result = await fetchUserPaginated(payload);
    setRandomUsers(result);
    setIsLoading(false);
  };

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
    const navigatePagePayload = {
      page: pageNumber,
      keyword: keyword,
      gender: gender.value,
      sortBy: sort?.sortType,
      sortOrder: sort?.sortOrder,
    };
    const result = await fetchUserPaginated(navigatePagePayload);
    setRandomUsers(result);
    setIsLoading(false);
  };

  const componentDidMount = async () => {
    setIsLoading(true);
    // default GET first page
    const result = await fetchUserPaginated({ page: 1 });
    setRandomUsers(result);
    setIsLoading(false);
  };

  useEffect(() => {
    componentDidMount();
  }, []);

  return (
    <Container>
      <TitlePage>EXAMPLE WITH SEARCH AND FILTER</TitlePage>
      <SearchAndFilter
        genderOptions={genderOptions}
        gender={gender}
        keyword={keyword}
        handleOnSelectGender={handleOnSelectGender}
        handleOnClickResetButton={handleOnClickResetButton}
        handleOnClickSearchButton={handleOnClickSearchButton}
        handleOnChangeInputForm={handleOnChangeInputForm}
      />
      <Separator />
      {isLoading || !randomUsers?.length ? (
        <>Loading...</>
      ) : (
        <Table
          randomUsers={randomUsers}
          activePage={activePage}
          options={pageOptions}
          sort={sort}
          handleOnChangePage={handleOnChangePage}
          handleOnClickSortButton={handleOnClickSortButton}
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
