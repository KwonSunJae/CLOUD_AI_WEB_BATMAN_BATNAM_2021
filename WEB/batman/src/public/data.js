let _sectors = [];

for (let i = 0; i < 5; i++) {
  _sectors.push({
    name: "섹터 " + i,
    bomb: i,
    soundbomb: i,
    logs: [],
    cam: [i],
    _id: i,
  });
}

///////////////////////////////////////////////////////

const runwayForm = {
  name: "활주로 ",
  angles: [],
  sectors: {
    top: _sectors,
    bottom: [],
  },
  logs: [],
};

let list = [];

list.push({
  name: "활주로 선택",
  _id: 0,
  angles: [],
  sectors: {
    top: [],
    bottom: [],
  },
  logs: [],
});

for (let i = 0; i < 5; i++) {
  list.push({
    ...runwayForm,
    name: "활주로 " + i,
    angles: [i * 10, i * 10],
    _id: i + 1,
  });
}

///////////////////////////////////////////////////////

const log_on_1A = {
  runway: list[0],
  sector: _sectors[0],
  time: new Date(),
  finding: {
    kinds: "Bird",
    number: "3",
  },
};

const log_on_1C = {
  runway: list[0],
  sector: _sectors[3],
  time: new Date(),
  finding: {
    kinds: "Unknown",
    number: "1",
  },
};

const log_1 = {
  runway: list[0],
  sector: _sectors[0],
  time: new Date(),
  finding: {
    kinds: "Bird",
    number: "3",
  },
};

const log_2 = {
  runway: list[0],
  sector: _sectors[3],
  time: new Date(),
  finding: {
    kinds: "Unknown",
    number: "1",
  },
};

list[0].logs = [log_on_1A, log_on_1C];
_sectors[0].logs = [log_on_1A];
_sectors[3].logs = [log_on_1C];

export const runwayList = list;
export const sectorList = _sectors;
export const logList = [log_on_1A, log_on_1C, log_1, log_2];

// 실제 db에서는
// 로그는 _id 만 갖고있는다.

/////////

const userData = {
  id: "anjm1020",
  pw: "dkswoals2010",
};

export const check = (form) => {
  if (form.id === userData.id) {
    if (form.pw === userData.pw) {
      return { data: userData.id };
    } else {
      throw "Pw is Invalid";
    }
  } else {
    throw "Id is Invalid";
  }
};

export const logout = () => {
  return true;
}
