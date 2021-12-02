import React from "react";
import styled from "styled-components";
import { RandomUser } from "../type.d";

interface TableProps {
  randomUsers: RandomUser[];
}

const Table = (props: TableProps) => {
  const { randomUsers } = props;
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
      <TableBody></TableBody>
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

const Cell = styled.div<{ isHeader?: boolean }>`
  width: 20%;
  height: 100%;
  background-color: ${({ isHeader }) => (isHeader ? "#fafafa" : "#ffffff")};

  padding: 1rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
