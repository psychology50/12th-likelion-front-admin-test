import { createSvgIcon } from "@mui/material"
const TextIcon = createSvgIcon(
  <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 2V8H20"    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 13H8"    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 17H8"    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 9H9H8"    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  "Text"
)

const CalendarIcon = createSvgIcon(
  <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 2V6"    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 2V6"    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 10H21"    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  "Calendar"
)

const ChartIcon = createSvgIcon(
  <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 20V10"    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 20V4"    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 20V14"    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  "Chart"
)

const CheckIcon = createSvgIcon(
  <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 6L8.625 18L3 12.5455"    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,
  "Check"
)

export {TextIcon, CalendarIcon, ChartIcon, CheckIcon}