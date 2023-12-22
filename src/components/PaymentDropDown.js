import React, { useState } from "react";
import { PaymentBox, HLine } from "../styles/Nav.styled";
import deleteBtn from "../assets/Nav/deleteBtn.svg";
import axios from "axios";

const PaymentDropDown = () => {

    const [addData, setAddData] = useState();

    const deletePayment = (e) => { //결제정보 삭제
        axios.delete('http://49.50.164.193:8080/api/payment/{id}')
    }

    const addPayment = () => {
        axios.post('http://49.50.164.193:8080/api/payment', {
            
        })
        .then((res) => {
            console.log(res.data.data);
            setAddData(res.data.data);
        })
        .catch((err) => {
            console.log(err);
        });

    return (
        <PaymentBox>
            <button className="detailBox" onClick={deletePayment}>현금
            <img src = {deleteBtn} ></img>
            </button>
            <button className="detailBox" onClick={deletePayment}>신용카드
            <img src = {deleteBtn} ></img>
            </button>
            <button className="detailBox" onClick={deletePayment}>신용카드
            <img src = {deleteBtn} ></img>
            </button>
            <button className="detailBox" onClick={addPayment}>추가하기</button>
            
            <HLine/>
        </PaymentBox>
    )
}
}

export default PaymentDropDown;