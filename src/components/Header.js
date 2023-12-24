import StyledHeader from "../styles/components/StyledHeader";
import CalendarIcon from "../assets/CalendarIcon";
import FileTextIcon from "../assets/FileTextIcon";
import ChartIcon from "../assets/ChartIcon";
import { useState, useEffect } from "react";

const Header = ({ categoryList, paymentList }) => {
  const date = new Date();
  const monthName = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  const formattedDate = date.toISOString().split("T")[0];

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isChanged, setIsChanged] = useState({
    category_id: false,
    content: false,
    payment_id: false,
    amount: false,
    is_income: false,
  });
  const [addLedger, setAddLedger] = useState({
    used_at: "2023-12-22",
    category_id: 0,
    content: "string",
    payment_id: 0,
    amount: 0,
    is_income: true,
  });

  const onChangeDate = (e) => {
    setAddLedger({
      ...addLedger,
      used_at: e.target.value,
    });
  };
  const onChangeCategory = (e) => {
    setAddLedger({
      ...addLedger,
      category_id: e.target.id,
    });
    setIsChanged({
      ...isChanged,
      category_id: true,
    });
  };
  const onChangeContent = (e) => {
    setAddLedger({
      ...addLedger,
      content: e.target.value,
    });
    setIsChanged({
      ...isChanged,
      content: true,
    });
  };
  const onChangePayment = (e) => {
    setAddLedger({
      ...addLedger,
      payment_id: e.target.id,
    });
    setIsChanged({
      ...isChanged,
      payment_id: true,
    });
  };
  const onChangeAmount = (e) => {
    setAddLedger({
      ...addLedger,
      amount: e.target.value,
    });
    setIsChanged({
      ...isChanged,
      amount: true,
    });
  };

//   const onChangeCheck = Object.values(isChanged).every(
//     (value) => value === true
//   );
//   if (onChangeCheck) {
//     setIsButtonDisabled(false);
//   }

  useEffect(() => {
    const onChangeCheck = Object.values(isChanged).every(
      (value) => value === true
    );
    setIsButtonDisabled(!onChangeCheck);
  }, [isChanged]); 

  return (
    <StyledHeader>
      <div className="Wrapper">
        <div className="LogoBox">Logo</div>
        <div className="DateBox">
          <div className="Date">
            <div>{monthName}</div>
            <div>{year}</div>
          </div>
        </div>
        <div className="NavBox">
          <CalendarIcon />
          <ChartIcon />
          <FileTextIcon />
        </div>
      </div>
      <form className="InputWrapper">
        <div>
          일자
          <input
            type="date"
            defaultValue={formattedDate}
            onChange={onChangeDate}
          />
        </div>
        <div>
          분류
          <select onChange={onChangeCategory}>
            <option value="" hidden>
              선택하세요
            </option>
            {categoryList.map((item) => {
              return <option key={item.id}>{item.name}</option>;
            })}
          </select>
        </div>
        <div>
          내용
          <input type="text" onChange={onChangeContent} />
        </div>
        <div>
          결제수단
          <select onChange={onChangePayment}>
            <option value="" hidden>
              선택하세요
            </option>
            {paymentList.map((item) => {
              return <option key={item.id}>{item.name}</option>;
            })}

            {/* TODO: 결제수단 추가하기 기능 구현 */}
            <option value="현금">추가하기</option>
          </select>
        </div>
        <div>
          금액
          {/* TODO: 세자리 단위 콤마 구현 */}
          <input
            type="number"
            placeholder="입력하세요"
            onChange={onChangeAmount}
          />
          원
        </div>
        <button type="submit" disabled={isButtonDisabled}>
          추가
        </button>
      </form>
    </StyledHeader>
  );
};

export default Header;
