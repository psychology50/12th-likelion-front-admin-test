import StyledListItem from "../styles/components/StyledListItem";
import Item from "./Item";

const ListItem = ({ date, list }) => {
  // type이 "INCOME"인 객체들의 amount 합 구하기
  const incomeTotal = list
    .filter((item) => item.type === "INCOME")
    .reduce((acc, item) => acc + item.amount, 0);

  // type이 "EXPENSE"인 객체들의 amount 합 구하기
  const expenseTotal = list
    .filter((item) => item.type === "EXPENSE")
    .reduce((acc, item) => acc + item.amount, 0);

  return (
    <StyledListItem>
      <div className="header">
        <div>{date}</div>
        <div className="total">
          {incomeTotal === 0 ? null : <div>수입 {incomeTotal}원</div>}
          {expenseTotal === 0 ? null : <div>소비 {expenseTotal}원</div>}
        </div>
      </div>

      <div>
        {list.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </div>
    </StyledListItem>
  );
};

export default ListItem;
