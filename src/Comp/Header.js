import {
  Container,
  Stack,
  AppBar,
  IconButton,
  Typography,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { TextIcon, CalendarIcon, ChartIcon } from '../icons';

import { useSelector, useDispatch } from 'react-redux';
import { plus, minus } from "../redux/MonthYearReducer"
import { useEffect } from 'react';

const monthNames = [
  'January', 'February', 'March', 'April', 
  'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December'
];

const Header = () => {

  const monthYear = useSelector((state) => state.monthYear)
  const dispatch = useDispatch()

  const handlePlus = () => {
    dispatch(plus())
  }

  const handleMinus = () => {
    dispatch(minus())
  }

  return (
    <AppBar position='static'>
      <Container maxWidth="md" >
        <Stack
          margin={"0px 28px"}
          height={"194px"}
          paddingBottom={"48px"}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {/* Logo */}
          <h1>Logo</h1>

          {/* Month & Year */}
          <Stack width={"315px"} height={"80px"} direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
            <IconButton color='offWhite' onClick={handleMinus} variant={"arrow"}>
              <ArrowBackIosNewIcon></ArrowBackIosNewIcon>
            </IconButton>

            <Stack alignItems={"center"}>
              <Typography variant='disLg' color='offWhite.main'>
                {monthNames[monthYear.month]}
              </Typography>
              <Typography variant='disSm' color='offWhite.main'>
                {monthYear.year}
              </Typography>
            </Stack>

            <IconButton color='offWhite' onClick={handlePlus} variant={"arrow"}>
              <ArrowForwardIosIcon></ArrowForwardIosIcon>
            </IconButton>
            
          </Stack>


          {/* Right Btns */}
          <Stack direction={"row"}>
            <IconButton color='offWhite'>
              <TextIcon></TextIcon>
            </IconButton>
            <IconButton color='offWhite'>
              <CalendarIcon></CalendarIcon>
            </IconButton>
            <IconButton color='offWhite'>
              <ChartIcon></ChartIcon>
            </IconButton>
          </Stack>

        </Stack>
      </Container>
    </AppBar>
  )
}

export default Header