import React, { useState } from "react";
import styled from "styled-components";

import Button from "@mui/material/Button";

import RunwayListCntr from "./RunwayList.cntr";
import RunwayModal from "../../../component/home/Runway/RunwayModal";
import RunwayGraphicCntr from "./RunwayGraphic.cntr";


const RunwayBlockWrapper = styled.div`
  height: 30%;
  width: 70%;
`;

const MainBlock = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
`;

const SiderWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const RunwayWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

const RunwayBlock = () => {
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    name: String,
    angle_start: Number,
    angle_end: Number,
    sectors: {
      top: [],
      bottom: [],
    },
  });
  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <RunwayBlockWrapper>
      <MainBlock>
        <SiderWrapper>
          <RunwayListCntr />
          <Button variant="outlined" onClick={() => setOpen(true)}>
            새 활주로 생성하기
          </Button>
          <RunwayModal
            open={open}
            onClose={() => setOpen(false)}
            form={form}
            onChange={onChange}
          />
        </SiderWrapper>
        <RunwayWrapper>
          <RunwayGraphicCntr />
        </RunwayWrapper>
      </MainBlock>
    </RunwayBlockWrapper>
  );
};

export default RunwayBlock;
