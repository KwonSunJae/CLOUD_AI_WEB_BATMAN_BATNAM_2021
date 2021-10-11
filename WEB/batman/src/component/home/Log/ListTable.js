import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "time", label: "Time", align: "center" },
  {
    id: "place",
    label: "활주로/섹터번호",
    align: "center",
    format: (value) => value.toLocaleString("ko-KR"),
    fontsize: "0.65rem",
  },
  {
    id: "detected",
    label: "내용",
    align: "center",
    format: (value) => value.toLocaleString("ko-KR"),
    fontsize: "0.75rem",
  },
  {
    id: "result",
    label: "결과",
    align: "center",
    format: (value) => value.toLocaleString("ko-KR"),
    fontsize: "0.75rem",
  },
];

const formatDate = (date) => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = month >= 10 ? month : "0" + month;
  let day = date.getDate();
  day = day >= 10 ? day : "0" + day;
  let hour = date.getHours();
  hour = hour >= 10 ? hour : "0" + hour;
  let min = date.getMinutes();
  let sec = date.getSeconds();
  sec = sec >= 10 ? sec : "0" + sec;

  let purchaseDay =
    year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec;
  return purchaseDay;
};

const ListTable = ({ list }) => {
  const logList = list.map((d) => ({
    time: formatDate(d.time),
    place: d.runway.name + ":" + d.sector.name,
    finding: d.finding.kinds + "/" + d.finding.number,
    result: d.reslut ? d.result : null,
  }));
  return (
    <Paper sx={{ width: "100%", height: "100%", padding: "auto" }}>
      <TableContainer sx={{ maxHeight: "550px" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={4}>
                최근 발견
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    top: 57,
                    minWidth: column.minWidth,
                    fontSize: column.fontsize,
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {logList.map((d, idx) => (
              <TableRow hover key={idx}>
                <TableCell>{d.time}</TableCell>
                <TableCell>{d.place}</TableCell>
                <TableCell>{d.finding}</TableCell>
                <TableCell>{d.result}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ListTable;
