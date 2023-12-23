import { useState } from "react";

const DetailListItem = ({ item, total_income, total_expense }) => {
  const [month, setMonth] = useState(12);
  const [day, setDay] = useState(23);
  const [dayOfWeek, setDayOfWeek] = useState("토");

  return (
    <>
      <div>
        <div>
          <span>
            {month}월 {day}일 {dayOfWeek}
          </span>
          <span>
            수입 {total_income} 지출 {total_expense}
          </span>
        </div>
        <div>
          <span>{item.category_name}</span>
          <span>{item.content}</span>
          <span>{item.payment_name}</span>
          <span>
            {item.type === "INCOME" ? "+" : "-"}
            {item.amount}원
          </span>
        </div>
      </div>
    </>
  );
};

export default DetailListItem;
