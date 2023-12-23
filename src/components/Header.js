import React, {useState, useEffect} from "react";
import { HeaderBox, HeaderInBox, DateBox} from "../styles/Header.styled";
import back_button from "../assets/Header/back_button.svg";
import next_button from "../assets/Header/next_button.svg";
import file_button from "../assets/Header/file_button.svg";
import calendar from "../assets/Header/calendar.svg";
import chart_button from "../assets/Header/chart_button.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    let now = new Date();
    let year = now.getFullYear();
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let thisMonth = month[now.getMonth()];

    const [currentData, setCurrentDate] = useState(thisMonth);

    const handleChange = () => {
        
    }

    const handlePrevMonth = (e) => {
        const newDate = thisMonth-1;
    }

    const handleNextMonth = (e) => {
        const newDate = thisMonth+1;
    }

    return (
        <HeaderBox>
            <HeaderInBox>
                <button className="logo" onClick={() => navigate("/MainPage")}>Butler</button>

                <DateBox>
                    <button className="leftArrowBtn" onClick={handlePrevMonth}>
                        <img src = {back_button}></img>
                    </button>
                    <p className="title">{thisMonth}</p>
                    <p className="subtitle">{year}</p>
                    <button className="rightArrowBtn" onClick={handleNextMonth}>
                        <img src={next_button}></img>
                    </button>
                </DateBox>

                <div className="iconBox">
                    <button className="icon" onClick={() => navigate("/FilePage")}>
                        <img src = {file_button}></img>
                    </button>
                    <button className="icon" onClick={() => navigate("/CalendarPage")}>
                        <img src = {calendar}></img>
                    </button>
                    <button className="icon" onClick={() => navigate("/ChartPage")}>
                        <img src = {chart_button}></img>
                    </button>
                </div>
                
            </HeaderInBox>    
        </HeaderBox>
    )
}
 export default Header;