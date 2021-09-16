import React from "react";
import styled from "styled-components";
import oc from "open-color";

import { IoIosAirplane } from "react-icons/io";

const AirStripWrapper = styled.div`
  margin-top: 2rem;

  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  align-items: center;
`;

const SectorLineWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

const StyledSector = styled.div`
  background: gray;
  color: white;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  font-weight: bolder;
  padding: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

const StripLine = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

const AirPlaneIcon = styled.div`
  font-size: 3rem;
  width: 30%;
`;

const StripRoad = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

const BlackRoad = styled.div`
  background: black;
  height: 40%;
`;

const WhiteRoad = styled.div`
  background: ${oc.gray[6]};
  flex: 1;
`;

const AitStripBlock = () => {
  return (
    <AirStripWrapper>
      <SectorLineWrapper>
        <StyledSector>Sector [A]</StyledSector>
        <StyledSector>Sector [B]</StyledSector>
        <StyledSector>Sector [C]</StyledSector>
        <StyledSector>Sector [D]</StyledSector>
      </SectorLineWrapper>
      <StripLine>
        <AirPlaneIcon>
          <IoIosAirplane />
        </AirPlaneIcon>
        <StripRoad>
          <BlackRoad />
          <WhiteRoad />
          <BlackRoad />
        </StripRoad>
      </StripLine>
      <SectorLineWrapper>
        <StyledSector>Sector [A]</StyledSector>
        <StyledSector>Sector [B]</StyledSector>
        <StyledSector>Sector [C]</StyledSector>
        <StyledSector>Sector [D]</StyledSector>
      </SectorLineWrapper>
    </AirStripWrapper>
  );
};

export default AitStripBlock;
