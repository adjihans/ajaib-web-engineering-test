import React from "react";
import SortDescending from "../assets/sort-desc.svg";
import SortAscending from "../assets/sort-asc.svg";
import SortInactive from "../assets/sort-inactive.svg";
import { sortBy } from "../type.d";
import styled from "styled-components";

interface SortTriangleProps {
  sortType?: SortType;
  sortStatus?: boolean;
}

type SortType = sortBy.ASC | sortBy.DESC;

const SortTriangle = (props: SortTriangleProps) => {
  const { sortType = sortBy.DESC, sortStatus = true } = props;
  const renderSort = () => {
    if (!sortStatus) {
      return <Image src={SortInactive} />;
    } else if (sortType === sortBy.DESC) {
      return <Image src={SortDescending} />;
    } else {
      return <Image src={SortAscending} />;
    }
  };
  return renderSort();
};

export default SortTriangle;

const Image = styled.img`
  cursor: pointer;
`;
