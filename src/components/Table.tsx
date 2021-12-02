import React from "react";
import styled from "styled-components";

const Table = () => {
  return (
    <TableContainer>
      <TableHeaderContainer>
        <Cell isHeader={true}>Username</Cell>
        <Cell isHeader={true}>Name</Cell>
        <Cell isHeader={true}>Email</Cell>
        <Cell isHeader={true}>Gender</Cell>
        <Cell isHeader={true}>Registered Date</Cell>
      </TableHeaderContainer>
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

const TableHeaderContainer = styled.div`
  width: 100%;
  height: 2rem;

  display: flex;
  flex-direction: row;
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
