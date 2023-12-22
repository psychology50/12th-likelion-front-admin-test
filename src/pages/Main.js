import Header from "../components/Header";
import ListItem from "../components/ListItem";
import StyledMain from "../styles/pages/StyledMain";
import axios from "axios";
import { useState, useEffect } from "react";
const Main = () => {
  const [data, setData] = useState([]);
  const [payment, setPayment] = useState([]);
  const [category, setCategory] = useState([]);
  const [incomeChecked, setIncomeChecked] = useState(true);
  const [expenseChecked, setExpenseChecked] = useState(true);

  const handleIncomeChecked = () => {
    setIncomeChecked(!incomeChecked);
  };

  const handleExpenseChecked = () => {
    setExpenseChecked(!expenseChecked);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://49.50.164.193:8080/api/ledger");
      setData(result.data);
    };
    const fetchPayment = async () => {
      const result = await axios("http://49.50.164.193:8080/api/payment");
      setPayment(result.data);
    };
    const fetchCategory = async () => {
      const result = await axios("http://49.50.164.193:8080/api/category");
      setCategory(result.data);
    };
    fetchData();
    fetchPayment();
    fetchCategory();
  }, []);

  const groupedByDate = data.reduce((acc, obj) => {
    const date = obj.used_at;
    if (!acc[date]) {
      acc[date] = [obj];
    } else {
      acc[date].push(obj);
    }
    return acc;
  }, {});

  // type이 "INCOME"인 객체들의 amount 합 구하기
  const incomeTotal = data
    .filter((item) => item.type === "INCOME")
    .reduce((acc, item) => acc + item.amount, 0);

  // type이 "EXPENSE"인 객체들의 amount 합 구하기
  const expenseTotal = data
    .filter((item) => item.type === "EXPENSE")
    .reduce((acc, item) => acc + item.amount, 0);

  const renderList = () => {
    if (incomeChecked && expenseChecked) {
      return Object.keys(groupedByDate).map((date) => {
        const objectsInDate = groupedByDate[date];
        return <ListItem key={date} date={date} list={objectsInDate} />;
      });
    } else if (incomeChecked) {
      return Object.keys(groupedByDate).map((date) => {
        const objectsInDate = groupedByDate[date];
        return <ListItem key={date} date={date} list={objectsInDate} />;
      });
    } else if (expenseChecked) {
      return Object.keys(groupedByDate).map((date) => {
        const objectsInDate = groupedByDate[date];
        return <ListItem key={date} date={date} list={objectsInDate} />;
      });
    } else {
      return null;
    }
  };

  

  return (
    <StyledMain>
      <Header categoryList={category} paymentList={payment} />
      <div className="wrapper">
        <div className="wrapper__header">
          <div>전체 내역 {data.length}건</div>
          <div className="total">
            <input
              type="checkbox"
              onChange={handleIncomeChecked}
              checked={incomeChecked}
            />
            수입 {incomeTotal}원
            <input
              type="checkbox"
              onChange={handleExpenseChecked}
              checked={expenseChecked}
            />
            지출 {expenseTotal}원
          </div>
        </div>
        <div className="wrapper__body">
          {/* {Object.keys(groupedByDate).map((date) => {
            const objectsInDate = groupedByDate[date];
            return <ListItem key={date} date={date} list={objectsInDate} />;
          })} */}
          {renderList()}
        </div>
      </div>
    </StyledMain>
  );
};

export default Main;
