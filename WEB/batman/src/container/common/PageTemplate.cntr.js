import styled from "styled-components";

import HeaderCntr from "./Header.cntr";

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const ChildrenWrapper = styled.div`
  flex: 1;

  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
`;

const PageTemplateCntr = ({ children }) => {
  return (
    <PageWrapper>
      <HeaderCntr />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </PageWrapper>
  );
};

export default PageTemplateCntr;
