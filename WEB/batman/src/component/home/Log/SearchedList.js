import React from "react";
import styled from "styled-components";

import ListTable from "./ListTable";

const MainBlock = styled.div`
  height: 99%;
  width: 95%;
`;

const SearchedWrapper = styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchedList = ({ list }) => {
  return (
    <SearchedWrapper>
      <MainBlock>
        <ListTable list={list} />
      </MainBlock>
    </SearchedWrapper>
  );
};

export default SearchedList;
