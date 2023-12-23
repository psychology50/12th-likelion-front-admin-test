import { useState } from "react";
import { useNavigate } from "react-router-dom";
import file_text from "./img/file_text.png";
import calendar from "./img/calendar.png";
import chart from "./img/chart.png";

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
      <div style={{ textAlign: "center" }}>
        <div>
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
          <span>
            <span onClick={handlePrevMonth}>{"<"}</span>
            <span>
              <span>{`${currentDate.toLocaleString("en-US", {
                month: "long",
              })}`}</span>
              <span>{`${currentDate.getFullYear()}`}</span>
            </span>
            <span onClick={handleNextMonth}>{">"}</span>
          </span>
          <span
            style={
              ({ display: "inline-block" },
              { width: "132px" },
              { height: "44px" })
            }
          >
            <img src={file_text} alt="file_text" onClick={navigateToMain} />
            <img src={calendar} alt="calendar" onClick={navigateToCal} />
            <img src={chart} alt="chart" onClick={navigateToStatics} />
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
