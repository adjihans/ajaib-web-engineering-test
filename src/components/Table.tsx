import React from "react";
import styled from "styled-components";
import { PaginationType, RandomUser } from "../type.d";

interface TableProps {
  randomUsers: RandomUser[];
  activePage: number;
  options: number[];
  handleOnChangePage: (type: string, page?: number) => void;
}

const Table = (props: TableProps) => {
  const { randomUsers, activePage, options, handleOnChangePage } = props;
  const renderTableBody = () => {
    if (!randomUsers) return;
    return (
      <>
        {randomUsers?.map((randomUser: RandomUser) => {
          let name = `${randomUser.name.title}. ${randomUser.name.first} ${randomUser.name.last}`;
          return (
            <CellRow>
              <Cell>{randomUser.login.username}</Cell>
              <Cell>{name}</Cell>
              <Cell>{randomUser.email}</Cell>
              <Cell>{randomUser.gender}</Cell>
              <Cell>{randomUser.registered.date}</Cell>
            </CellRow>
          );
        })}
      </>
    );
  };

  const renderPaginatedSelection = () => {
    return (
      <>
        <Paginated onClick={() => handleOnChangePage(PaginationType.DECREMENT)}>
          {"<"}
        </Paginated>
        {options.map((option: number) => (
          <Paginated
            isActive={activePage === option}
            onClick={() => handleOnChangePage(PaginationType.NUMBER, option)}
          >
            {option}
          </Paginated>
        ))}
        <Paginated onClick={() => handleOnChangePage(PaginationType.INCREMENT)}>
          {">"}
        </Paginated>
      </>
    );
  };

  return (
    <TableContainer>
      <TableHeader>
        <Cell isHeader={true}>Username</Cell>
        <Cell isHeader={true}>Name</Cell>
        <Cell isHeader={true}>Email</Cell>
        <Cell isHeader={true}>Gender</Cell>
        <Cell isHeader={true}>Registered Date</Cell>
      </TableHeader>
      <TableBody>{renderTableBody()}</TableBody>
      <PaginationSelection>{renderPaginatedSelection()}</PaginationSelection>
    </TableContainer>
  );
};

export default Table;

const TableContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 2rem 0;
`;

const TableHeader = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TableBody = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CellRow = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid black;
`;

const PaginationSelection = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const Paginated = styled.div<{ isActive?: boolean }>`
  width: 2rem;
  height: 2rem;
  margin: 0.5rem 0.5rem;

  cursor: pointer;

  border: 1px solid #fafafa;
  border-radius: 3px;

  color: ${({ isActive }) => (isActive ? "#574FCF" : "#000000")};
  border-color: ${({ isActive }) => (isActive ? "#574FCF" : "#000000")};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Cell = styled.div<{ isHeader?: boolean }>`
  width: 20%;
  height: 100%;
  background-color: ${({ isHeader }) => (isHeader ? "#fafafa" : "#ffffff")};

  padding: 1rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
