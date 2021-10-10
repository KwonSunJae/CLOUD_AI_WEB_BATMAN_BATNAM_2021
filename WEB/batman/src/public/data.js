let sectorA = {
  name: "섹터 A",
  bomb: 1,
  soundbomb: 1,
  logs: [],
  cam: [1],
};

let sectorB = {
  name: "섹터 B",
  bomb: 2,
  soundbomb: 2,
  logs: [],
  cam: [2],
};

let sectorC = {
  name: "섹터 C",
  bomb: 3,
  soundbomb: 3,
  logs: [],
  cam: [3],
};

let _sectors = [sectorA, sectorB, sectorC, sectorB];
let _sectors2 = [sectorA, sectorB, sectorC, sectorC, sectorC];

///////////////////////////////////////////////////////

const runwayForm = {
  name: "활주로 ",
  angles: [],
  sectors: {
    top: _sectors,
    bottom: _sectors2,
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
  sector: sectorA,
  time: new Date(),
  finding: {
    kinds: "Bird",
    number: "3",
  },
};

const log_on_1C = {
  runway: list[0],
  sector: sectorC,
  time: new Date(),
  finding: {
    kinds: "Unknown",
    number: "1",
  },
};

const log_1 = {
  runway: list[0],
  sector: sectorA,
  time: new Date(),
  finding: {
    kinds: "Bird",
    number: "3",
  },
};

const log_2 = {
  runway: list[0],
  sector: sectorC,
  time: new Date(),
  finding: {
    kinds: "Unknown",
    number: "1",
  },
};

list[0].logs = [log_on_1A, log_on_1C];
sectorA.logs = [log_on_1A];
sectorC.logs = [log_on_1C];

export const runwayList = list;
export const sectorList = _sectors;
export const logList = [log_on_1A, log_on_1C, log_1, log_2];

// 실제 db에서는
// 로그는 _id 만 갖고있는다.
