import styled from "styled-components";

import Header from "./Header";

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const ChildrenWrapper = styled.div`
  flex: 1;
`;

const PageTemplate = ({ children }) => {
  return (
    <PageWrapper>
      <Header />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </PageWrapper>
  );
};

export default PageTemplate;
