import { useSelector } from "react-redux"
import { getLedgerAPI } from "../API/LedgerAPI"
import { useState, useEffect } from "react"
import { 
  Container,
  Stack,
  Typography,
  Box
} from "@mui/material"

import DayList from "./DayList"

const EXPENSE = "EXPENSE"
const INCOME = "INCOME"

const MonthList = () => {
  const date = useSelector((state) => state.monthYear)
  const [allExpense, setAllExpense] = useState(0)
  const [allIncome, setAllIncome] = useState(0)
  const [ledgerKeys, setLedgerKeys] = useState([])
  const [ledgerData, setLedgerData] = useState({})
  useEffect(() => {
    function filterCurrentMonthData(data) {
      return data.filter(item => {
        const usedAt = new Date(item.used_at);
        const usedYear = usedAt.getFullYear();
        const usedMonth = usedAt.getMonth();
  
        return usedYear === date.year && usedMonth === date.month
      });
    }
  
    function groupByDate(data) {
      return data.reduce((acc, cur) => {
        const date = cur.used_at;
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(cur);
        return acc;
      }, {});
    }
  
    const fetch = async() => {
      const res = await getLedgerAPI()
      const fData = filterCurrentMonthData(res)
      const gData = groupByDate(fData)
      setLedgerKeys(Object.keys(gData))
      setLedgerData(gData)
      Object.values(gData).forEach((arr) => {
        Object.values(arr).forEach((el) => {
          if(el.type === EXPENSE){
            setAllExpense((prev) => {return prev += el.amount})
          } else {
            setAllIncome((prev) => {return prev += el.amount})
          }
        })
      })
    }
    fetch()
  }, [date])


  return (
    <Container maxWidth="sm">
      <Stack direction={"row"} justifyContent={"space-between"} >
        <Typography variant="noto" fontSize={"22px"} color={"primary.main"}>전채 내역 {13}건</Typography>
        
        <Stack direction={"row"}>
          <Typography variant="noto" fontSize={"16px"} color={"primary.main"} marginRight={"16px"}>수입 {allIncome}</Typography>
          <Typography variant="noto" fontSize={"16px"} color={"primary.main"}>지출 {allExpense}</Typography>
        </Stack>
      </Stack>
      {
        ledgerKeys.map((date) => {
          return <DayList key={date} date={date} dayData={ledgerData[date]}></DayList>
        })
      }

      <Box height={"100px"}></Box>
    </Container>
  )

}
export default MonthList