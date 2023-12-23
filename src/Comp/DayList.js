import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
  Stack,
  Typography
} from '@mui/material';
import { useState, useEffect } from 'react';

const EXPENSE = "EXPENSE"
const INCOME = "INCOME"

const DayList = ({ date, dayData }) => {

  const rows = dayData

  const [dayExpense, setDayExpense] = useState(0)
  const [dayIncome, setDayIncome] = useState(0)

  useEffect(() => {
    dayData.forEach((el) => {
      if(el.type == EXPENSE){
        setDayExpense(prev => prev += el.amount)
      } else {
        setDayIncome(prev => prev += el.amount)
      }
    });
  },[])

  return (
    <TableContainer component={Paper} sx={{ marginTop: "48px" }}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography variant="noto" fontSize={"14px"} color={"titleAct.main"}>{date}</Typography>
        <Stack direction={"row"}>
          {
            (dayIncome !== 0)&&<Typography variant="noto" fontSize={"14px"} color={"titleAct.main"}>수입 {dayIncome}</Typography>
          }
          {
            (dayExpense !== 0)&&<Typography variant="noto" fontSize={"14px"} color={"titleAct.main"} marginLeft={"14px"}>지출 {dayExpense}</Typography>
          }
        </Stack>

      </Stack>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              direction={"row"}

            >
              <TableCell align="right" width={"92px"}>{row.category_name}</TableCell>
              <TableCell align="right" width={"306px"}>{row.content}</TableCell>
              <TableCell align="right" width={"198px"}>{row.payment_name}</TableCell>
              <TableCell align="right" width={"198px"}>{(row.type === EXPENSE) ? "-" : "+"}{row.amount}원</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DayList