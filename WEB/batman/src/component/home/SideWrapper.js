import styled from "styled-components";

const SideWrapper = styled.div`
  height: 99%;
  width: 30%;
  display: flex;
  flex-flow: column wrap;
`;

const Side = ({ children }) => <SideWrapper>{children}</SideWrapper>;

export default Side;
