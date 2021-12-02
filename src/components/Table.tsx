import React from "react";
import styled from "styled-components";

interface TableProps {
  datas?: Data[];
}

interface Data {
  username: string;
  name: string;
  email: string;
  gender: string;
  registeredDate: string;
}

const Table = (props: TableProps) => {
  const {
    datas = [
      {
        username: "tes",
        name: "tes1",
        email: "tes@mail.com",
        gender: "male",
        registeredDate: "tes",
      },
    ],
  } = props;
  const renderTableBody = () => {
    if (!datas) return;
    return (
      <>
        {datas.map((data: Data) => (
          <CellRow>
            <Cell>{data.username}</Cell>
            <Cell>{data.name}</Cell>
            <Cell>{data.email}</Cell>
            <Cell>{data.gender}</Cell>
            <Cell>{data.registeredDate}</Cell>
          </CellRow>
        ))}
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
  height: 2rem;

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
