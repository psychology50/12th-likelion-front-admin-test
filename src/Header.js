import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import file_text from "./img/file_text.png";
import calendar from "./img/calendar.png";
import chart from "./img/chart.png";

const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #d7d7d7;
  color: white;
`;
const HeaderDayRow = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const HeaderDay = styled.span`
  display: flex;
  flex-direction: column;
  margin: 0px 34px;
`;
const HeaderImg = styled.img`
  width: 24px;
  height: 24px;
  margin: 10px 5px 0px 5px;
`;

const Header = () => {
  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate("/");
  };
  const navigateToCal = () => {
    navigate("/CalendarPage");
  };
  const navigateToStatics = () => {
    navigate("/StaticsPage");
  };

  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  return (
    <>
      <HeaderLayout>
        <span
          style={
            ({ display: "inline" },
            { width: "68px" },
            { height: "24px" },
            { fontSize: "24px" })
          }
          onClick={navigateToMain}
        >
          Butler
        </span>
        <HeaderDayRow>
          <span onClick={handlePrevMonth}>{"<"}</span>
          <HeaderDay>
            <span
              style={
                ({ display: "inline-block" },
                { lineHeight: "1" },
                { verticalAlign: "middle" },
                { width: "240px" },
                { height: "56px" },
                { fontSize: "48px" })
              }
            >{`${currentDate.toLocaleString("en-US", {
              month: "long",
            })}`}</span>
            <span
              style={
                ({ display: "inline" },
                { width: "57px" },
                { height: "24px" },
                { fontSize: "24px" })
              }
            >{`${currentDate.getFullYear()}`}</span>
          </HeaderDay>
          <span onClick={handleNextMonth}>{">"}</span>
        </HeaderDayRow>
        <span
          style={
            ({ display: "inline-block" },
            { width: "132px" },
            { height: "44px" })
          }
        >
          <HeaderImg src={file_text} alt="file_text" onClick={navigateToMain} />
          <HeaderImg src={calendar} alt="calendar" onClick={navigateToCal} />
          <HeaderImg src={chart} alt="chart" onClick={navigateToStatics} />
        </span>
      </HeaderLayout>
    </>
  );
};

export default Header;
