import React, { ChangeEvent } from "react";
import styled from "styled-components";
import SearchLogo from "../assets/search.svg";
import Select from "react-select";
import { Option } from "../type";

interface SearchAndFilterProps {
  genderOptions: Option[];
  gender: Option;
  keyword: string;
  handleOnSelectGender: (option: Option) => void;
  handleOnClickResetButton: () => void;
  handleOnClickSearchButton: () => void;
  handleOnChangeInputForm: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchAndFilter = (props: SearchAndFilterProps) => {
  const {
    genderOptions,
    gender,
    keyword,
    handleOnSelectGender,
    handleOnClickResetButton,
    handleOnClickSearchButton,
    handleOnChangeInputForm,
  } = props;
  return (
    <FilterContainer>
      <FilterSection>
        <div>Search</div>
        <Form>
          <InputForm
            placeholder="Search..."
            value={keyword}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleOnChangeInputForm(event)
            }
          />
          <SearchButton onClick={handleOnClickSearchButton}>
            <Search src={SearchLogo} alt="search-logo" />
          </SearchButton>
        </Form>
      </FilterSection>
      <FilterSection>
        <div>Gender</div>
        <GenderFilterSection>
          <Select
            styles={genderSelectionStyle}
            options={genderOptions}
            value={gender}
            onChange={(value: any) => handleOnSelectGender(value)}
          />
          <ResetButton onClick={handleOnClickResetButton}>
            Reset Filter
          </ResetButton>
        </GenderFilterSection>
      </FilterSection>
    </FilterContainer>
  );
};

export default SearchAndFilter;

const FilterContainer = styled.div`
  margin: 1rem 0 3rem 0;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-right: 1rem;
`;

const GenderFilterSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
`;

const InputForm = styled.input`
  height: 2rem;
  width: 15rem;

  cursor: text;
  border: none;
`;

const SearchButton = styled.div`
  background-color: blue;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 2.2rem;
  width: 2.2rem;

  cursor: pointer;
`;

const Search = styled.img`
  max-height: 1rem;
`;

const ResetButton = styled.div`
  border: 1px solid gray;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 2.3rem;
  width: 8rem;
  margin-left: 1rem;

  border-radius: 5px;

  cursor: pointer;
`;

const genderSelectionStyle = {
  control: (provided: any) => ({
    ...provided,
    width: "10rem",
    height: "2rem",
    cursor: "pointer",
  }),
  indicatorSeparator: () => ({}),
};
