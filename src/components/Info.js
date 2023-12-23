import { useState, useEffect } from "react";
import axios from "axios";

import check from "../img/check.png";

const Info = () => {
  const [ledgerList, setLedgerList] = useState([]);

  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  const fetchLedgerList = () => {
    axios
      .get("/api/ledger")
      .then((response) => {
        setLedgerList(response.data);

        const incomeTotal = response.data
          .filter((item) => item.type === "INCOME")
          .reduce((total, item) => total + item.amount, 0);

        const expenseTotal = response.data
          .filter((item) => item.type === "EXPENSE")
          .reduce((total, item) => total + item.amount, 0);

        setTotalIncome(incomeTotal);
        setTotalExpense(expenseTotal);
      })
      .catch((error) => {
        console.error("내역 리스트를 불러오는 도중 에러 발생:", error);
      });
  };
  useEffect(() => {
    fetchLedgerList();
  }, []);

  return (
    <>
      <div>
        <span>전체 내역 {ledgerList.length}건</span>
        <img src={check} alt="check" />
        <span>수입 {totalIncome.toLocaleString()}</span>
        <img src={check} alt="check" />
        <span>지출 {totalExpense.toLocaleString()}</span>
      </div>
    </>
  );
};

export default Info;
