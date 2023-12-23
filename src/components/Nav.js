import React, { useState } from "react";
import { ModalBox, MiniBox, Line, ContentBox } from "../styles/Nav.styled";
import CategoryDropdown from "./CategoryDropdown";
import PaymentDropDown from "./PaymentDropDown";

const Nav = () => {

    const initData = Object.freeze({
        content: '',
        price:'',
    });
    const [data, updataData] = useState(initData);
    const [view, setView] = useState([false, false, false, false, false, false, false]);

    const handleChange = e => {
        updataData({
            ...data, [e.target.name]: e.target.value.trim()
        })
    }

    const inView = e => {
        let newView = [...view];
        newView[e] = false;
        setView(newView);
    }
    

    
    return (
        <ModalBox>
            <MiniBox>
                <p className="title">일자</p>
                <button className="subtitle">날짜</button>
            </MiniBox>
            <Line/>

            <MiniBox>
                <p className="title">분류</p>
                <ul className="subtitle" onClick={() => {setView(!view)}}>선택하세요{" "}
                    {view ? '^' : '⌄'} 
                    {view && <CategoryDropdown/>}
                </ul>
                
            </MiniBox>
            <Line/>

            <ContentBox>
                <p className="title">내용</p>
                <input 
                className="input"
                type="text"
                name="content"
                placeholder="입력하세요"
                value={data.content}
                required
                onChange={handleChange}/>
            </ContentBox>
            <Line/>

            <MiniBox>
                <p className="title">결제수단</p>
                <ul className="subtitle" onClick={() => {setView(!view)}}>선택하세요{" "}
                    {view ? '^' : '⌄'} 
                    {view && <PaymentDropDown/>}
                </ul>
            </MiniBox>
            <Line/>

            <ContentBox>
                <p className="title">금액</p>
                <input 
                className="input"
                type="text"
                name="price"
                placeholder="입력하세요"
                value={data.price}
                required
                onChange={handleChange}/> 
            </ContentBox>

            



        </ModalBox>
    )
}

export default Nav;