import { useState, useEffect } from "react";
import DetailListItem from "./DetailListItem";

const DetailList = ({ posts }) => {
  const [selectedDate, setSelectedDate] = useState("2023-12-23");
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    if (selectedDate) {
      const selectedDatePosts = posts.filter(
        (item) => item.used_at === selectedDate
      );

      const incomeTotal = selectedDatePosts
        .filter((item) => item.type === "INCOME")
        .reduce((total, item) => total + item.amount, 0);

      const expenseTotal = selectedDatePosts
        .filter((item) => item.type === "EXPENSE")
        .reduce((total, item) => total + item.amount, 0);

      setTotalIncome(incomeTotal);
      setTotalExpense(expenseTotal);
    }
  }, [selectedDate, posts]);

  return (
    <>
      <div>
        {posts.map((ledgerItem) => {
          return (
            <DetailListItem
              item={ledgerItem}
              total_income={totalIncome}
              total_expense={totalExpense}
            />
          );
        })}
      </div>
    </>
  );
};

export default DetailList;
