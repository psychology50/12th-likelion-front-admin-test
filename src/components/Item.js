import StyledItem from "../styles/components/StyledItem";

const Item = ({item}) => {
  return (
    <StyledItem>
      <div className="categoryName">{item.category_name}</div>
      <div className="content">{item.content}</div>
      <div className="payment_name">{item.payment_name}</div>
      <div className="amount">{item.amount}</div>
    </StyledItem>
  );
};

export default Item;
