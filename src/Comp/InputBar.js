import {
  Stack,
  Container,
  Select,
  FormControl,
  MenuItem,
  Typography,
  Input,
  IconButton,
  Paper,
  Box
} from "@mui/material"
import { useEffect, useState } from "react";
import { CheckIcon } from "../icons";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';
import { getPaymentAPI } from "../API/PaymentAPI";
import { getCategoryAPI } from "../API/CategoryAPI";
import List from "./MonthList.js";
import { postLedgerAPI } from "../API/LedgerAPI.js";
import { forceRender } from "../redux/MonthYearReducer.js";
import { useDispatch } from "react-redux";

const categoryNames = {
  expense: [
    {id: 1, name: '생활'},
    {id: 2, name: '식비'},
    {id: 3, name: '교통'},
    {id: 4, name: '쇼핑/뷰티'},
    {id: 5, name: '의료/건강'},
    {id: 6, name: '문화/여가'},
    {id: 7, name: '미분류'}],
  income: [
    {id: 1, name: "월급"},
    {id: 2, name: "용돈"},    
    {id: 3, name: "기타수입"}, ]
}

const date = new Date();
const year = date.getFullYear();
const month = ("0" + (date.getMonth() + 1)).slice(-2);
const day = ("0" + date.getDate()).slice(-2);
const yyyymmdd = year + month + day;

const EXPENSE = "expense"
const INCOME = "income"

const InputBar = () => {
  // 날자
  const [date, setDate] = useState(yyyymmdd)

  // 분류
  const [category, setCategory] = useState("")

  // 내용
  const [content, setContent] = useState("")

  // 결제수단
  const [paymentList, setPaymentList] = useState([])  // 결제수단 리스트
  const [payment, setPayment] = useState("")          // 선택한 결제수단 

  // 금액의 타입 : 지출/수입
  const [amount, setAmount] = useState("")
  const [amountType, setAmountType] = useState(EXPENSE)

  // post 가능 판단
  const [isVaild, setIsValid] = useState(false)


  const dispatch = useDispatch()

  useEffect(() => {
    const fetch = async() => {
      const res = await getPaymentAPI()
      setPaymentList(res)
      getCategoryAPI()
    }
    fetch()
  }, [])

  useEffect(() => {
    if(
      (checkDateFormat(date))&&
      (category !== "")&&
      (payment !== "")&&
      (amount !== "")
    ) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  },[date, category, content, payment, amount])

  function formatDate(dateString) {
    return dateString.slice(0, 4) + '-' + dateString.slice(4, 6) + '-' + dateString.slice(6);
  }

  function findCategoryIdByName(name) {
    // expense와 income 카테고리 모두를 순회합니다.
    for (const key in categoryNames) {
      // 주어진 key에 해당하는 카테고리 배열을 순회합니다.
      const category = categoryNames[key].find(item => item.name === name);
      if (category) {
        return category.id; // 일치하는 name을 찾으면 그에 해당하는 id를 반환합니다.
      }
    }
    return null; // 일치하는 name이 없으면 null을 반환합니다.
  }

  function checkDateFormat(dateStr) {
    const pattern = /^\d{4}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/;
  
    if (!pattern.test(dateStr)) {
      return false;
    }
  
    const year = parseInt(dateStr.substr(0, 4), 10);
    const month = parseInt(dateStr.substr(4, 2), 10);
    const day = parseInt(dateStr.substr(6, 2), 10);
  
    const date = new Date(year, month - 1, day);
  
    return date.getFullYear() === year && date.getMonth() + 1 === month && date.getDate() === day;
  }

  const handleDate = (e) => {
    setDate(e.target.value)
  }
  
  const handleCategory = (e) => {
    setCategory(e.target.value)
  }

  const handleContent = (e) => {
    setContent(e.target.value)
  }

  const handleAmountType = (e) => {
    setCategory("")
    setAmountType((amountType === EXPENSE)?INCOME:EXPENSE)
  }

  const handlePayment = (e) => {
    console.log("ptest", e.target.value)
    setPayment(e.target.value)
  }

  const handleAmount = (e) => {
    setAmount(e.target.value)
  }

  const handlePost = async() => {
    const data = {
      "used_at" : formatDate(date),
      "category_id": findCategoryIdByName(category),
      "content": content,
      "payment_id": payment,
      "amount": amount,
      "is_income": (amountType === INCOME)
    }
    await postLedgerAPI(data)
    .then(() => {
      dispatch(forceRender())
    })
  }


  return (
    <>
    <Container maxWidth="md" >
      <Paper sx={{transform: 'translateY(-32px)'}}>
        <Box padding="0px 16px">
        <Stack height={"76px"} direction={"row"} alignItems={"center"} justifyContent={"space-between"}>

          {/* Date */}
          <Stack width={"137px"}>
            <Typography variant="noto" color={"primary.main"}>일자</Typography>
            <Input
              defaultValue={date}
              placeholder="YYYYMMDD"
              disableUnderline={true}
              onChange={handleDate}>
            </Input>
          </Stack>

          {/* Category */}
          <Stack width={"149px"}>
            <Typography variant="noto" color={"primary.main"}>분류</Typography>
            <FormControl variant="standard">
              <Select
                disableUnderline={true}
                value={category}
                onChange={handleCategory}
                displayEmpty
                sx={(category === "") ? { color: "#888888" } : {}}
              >
                <MenuItem value={""} disabled sx={{ display: "none" }}>
                  선택하세요
                </MenuItem>
                {(amountType === EXPENSE)?
                  categoryNames.expense.map((el) => {
                    return(
                    <MenuItem value={el.name} key={el.id} >
                      {el.name}
                    </MenuItem>
                    )
                  })
                  :categoryNames.income.map((el) => {
                    return(
                    <MenuItem value={el.name} key={el.id} >
                      {el.name}
                    </MenuItem>
                    )
                  })
                }
              </Select>
            </FormControl>
          </Stack>

          {/* Body */}
          <Stack width={"221px"}>
            <Typography variant="noto" color={"primary.main"}>내용</Typography>
            <Input
              placeholder="입력하세요"
              disableUnderline={true}
              onChange={handleContent}>
            </Input>
          </Stack>

          {/* Payment */}
          <Stack width={"149px"}>
            <Typography variant="noto" color={"primary.main"}>결제수단</Typography>
            <FormControl variant="standard">
              <Select
                disableUnderline={true}
                value={payment}
                onChange={handlePayment}
                displayEmpty
                renderValue={(selected) => {
                  if(selected === ""){
                    return <MenuItem sx={{color: "#888888"}}>{"선택하세요"}</MenuItem>                    
                  }
                  return <MenuItem>{paymentList[selected - 1].name}</MenuItem>
                }}
              >
                <MenuItem value={""} disabled sx={{ display: "none" }}>
                  선택하세요
                </MenuItem>
                {
                  paymentList.map((pEl) => {
                    return (
                    <MenuItem value={pEl.id} key={pEl.id} sx={{justifyContent: "space-between"}}>
                      {pEl.name}
                      <IconButton color="error.main" variant="delete" edge="end" onClick={() => { console.log("Test") }}>
                        <ClearIcon></ClearIcon>
                      </IconButton>
                    </MenuItem>
                    )
                  })
                }
                <MenuItem value={""} onClick={() => {console.log("tl")}}>
                  추가하기
                </MenuItem>
              </Select>
            </FormControl>
          </Stack>

          {/* amount */}
          <Stack width={"221px"} padding={"16px"}>
            <Typography variant="noto" color={"primary.main"}>금액</Typography>
            <Stack direction={"row"} alignItems={"center"}>
              <IconButton variant="amount" onClick={handleAmountType}>
                {(amountType === EXPENSE)?
                  <RemoveIcon fontSize="16px"></RemoveIcon>:
                  <AddIcon fontSize="16px"></AddIcon>}
              </IconButton>
              <Input
                variant={"right"}
                inputProps={{
                  style: {
                    textAlign: 'right',
                  },
                }}
                onChange={handleAmount}
                placeholder="입력하세요"
                disableUnderline={true}>
              </Input>
              <Typography variant="noto">원</Typography>
            </Stack>
          </Stack>

          <IconButton variant={"check"} disabled={!isVaild} onClick={handlePost}>
            <CheckIcon></CheckIcon>
          </IconButton>


        </Stack>
        </Box>
      </Paper>
      </Container>
      <List></List>
      </>
  )
}
export default InputBar