import Header from "../components/Header";
import axios from "axios";
import { useState, useEffect } from "react";
const Main = () => {

    const [data, setData] = useState([]);
    const [payment, setPayment] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://49.50.164.193:8080/api/ledger',
            );
            setData(result.data);
        };
        const fetchPayment = async () => {
            const result = await axios(
                'http://49.50.164.193:8080/api/payment',);
            setPayment(result.data);
        }
        const fetchCategory = async () => {
            const result = await axios(
                'http://49.50.164.193:8080/api/category',);
            setCategory(result.data);
        }
        fetchData();
        fetchPayment();
        fetchCategory();
    }, []);

    return (
        <div>
            <Header categoryList = {category} paymentList={payment}/>
            <h1>hiheadsfasdfasdfas</h1>
        </div>
    );
}

export default Main;