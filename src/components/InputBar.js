import { useState, useEffect } from "react";
import axios from "axios";
import check from "../img/check.png";

const InputBar = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");

  const currentDate = `${year}${month}${day}`;

  const [selectedDate, setSelectedDate] = useState(currentDate);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(-1);
  const [availableCategorys, setAvailableCategorys] = useState([]);

  const handleCategoryChange = (e) => {
    const index = parseInt(e.target.value, 10);
    setSelectedCategoryIndex(index);
  };

  const fetchCategories = () => {
    axios
      .get("/api/category")
      .then((response) => {
        setAvailableCategorys(response.data);
      })
      .catch((error) => {
        console.error("카테고리를 불러오는 도중 에러 발생:", error);
      });
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  const saveCategory = () => {
    if (selectedCategoryIndex !== -1) {
      const selectedCategory = availableCategorys[selectedCategoryIndex];
      console.log(
        `카테고리 "${selectedCategory.name}"를 저장했습니다. (ID: ${selectedCategory.id})`
      );
    }
  };

  const [selectedPaymentIndex, setSelectedPaymentIndex] = useState(-1);
  const [availablePayments, setAvailablePayments] = useState([]);

  const handlePaymentChange = (e) => {
    const index = parseInt(e.target.value, 10);
    setSelectedPaymentIndex(index);
  };

  const fetchPayments = () => {
    axios
      .get("/api/payment")
      .then((response) => {
        setAvailablePayments(response.data);
      })
      .catch((error) => {
        console.error("결제수단을 불러오는 도중 에러 발생:", error);
      });
  };
  useEffect(() => {
    fetchPayments();
  }, []);

  const savePayment = () => {
    if (selectedPaymentIndex !== -1) {
      const selectedPayment = availablePayments[selectedPaymentIndex];
      console.log(
        `카테고리 "${selectedPayment.name}"를 저장했습니다. (ID: ${selectedPayment.id})`
      );
    }
  };

  const [content, setContent] = useState("");
  const [amount, setAmount] = useState("");
  const [isIncome, setIsIncome] = useState(true);

  const handleAmountChange = (e) => {
    const formattedAmount = Number(e.target.value).toLocaleString("en-US");
    setAmount(formattedAmount);
  };

  const handleIsIncome = () => {
    setIsIncome((prevIsIncome) => !prevIsIncome);
  };

  const [posts, setPosts] = useState([]);

  const addPost = () => {
    if (content.trim() === "") {
      return;
    }

    const originalDate = new Date(
      parseInt(currentDate.substring(0, 4), 10),
      parseInt(currentDate.substring(4, 6), 10) - 1,
      parseInt(currentDate.substring(6, 8), 10)
    );
    const date = originalDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    const newPost = {
      id: posts.length + 1, // 간단한 ID 부여
      used_at: date,
      category_id: selectedCategoryIndex,
      content: content,
      payment_id: selectedPaymentIndex,
      amount: amount,
      is_income: true,
    };

    saveCategory();
    savePayment();

    setPosts([...posts, newPost]);
    setContent("");
  };

  return (
    <>
      <div>
        <span>
          <label htmlFor="dateInput">일자</label>
          <input
            id="dateInput"
            type="text"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </span>
        <span>
          <label htmlFor="categorySelect">카테고리</label>
          <select
            id="categorySelect"
            onChange={handleCategoryChange}
            value={selectedCategoryIndex}
          >
            <option value="-1">선택하세요</option>
            {availableCategorys.map((category, index) => (
              <option key={category.id} value={index}>
                {category.name}
              </option>
            ))}
          </select>
        </span>
        <span>
          <label htmlFor="contentInput">내용</label>
          <input
            id="contentInput"
            type="text"
            placeholder="입력하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </span>
        <span>
          <label htmlFor="paymentSelect">결제수단</label>
          <select
            id="paymentSelect"
            onChange={handlePaymentChange}
            value={selectedPaymentIndex}
          >
            <option value="-1">선택하세요</option>
            {availablePayments.map((payment, index) => (
              <option key={payment.id} value={index}>
                {payment.name}
              </option>
            ))}
          </select>
        </span>
        <span>
          <span>
            <label htmlFor="amountInput">금액</label>
            <span>
              <span onClick={handleIsIncome}>{isIncome ? "-" : "+"}</span>
              <input
                id="amountInput"
                type="text"
                placeholder="입력하세요"
                value={amount}
                onChange={handleAmountChange}
              />
              <span>원</span>
            </span>
          </span>
          <img
            src={check}
            alt="check"
            onClick={addPost}
            disabled={
              selectedCategoryIndex === -1 || selectedPaymentIndex === -1
            }
          />
        </span>
      </div>
    </>
  );
};

export default InputBar;
