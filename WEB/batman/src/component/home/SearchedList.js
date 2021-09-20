import React from "react";
import styled from "styled-components";

import ListTable from "./ListTable";

const MainBlock = styled.div`
  height: 99%;
  width: 95%;
`;

const SearchedList = () => {
  return (
    <MainBlock>
      <ListTable />
    </MainBlock>
  );
};

export default SearchedList;
