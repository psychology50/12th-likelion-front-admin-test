import { useState, useEffect } from "react";
import axios from "axios";

import InputBar from "../components/InputBar";
import Info from "../components/Info";
import DetailList from "../components/DetailList";

const MainPage = () => {
  const [ledgerList, setLedgerList] = useState([]);

  const fetchLedgerList = () => {
    axios
      .get("/api/ledger")
      .then((response) => {
        const listData = response.data.map((item) => ({
          id: item.id,
          category_name: item.category_name,
          payment_name: item.payment_name,
          content: item.content,
          amount: item.amount,
          used_at: item.used_at,
          type: item.type,
        }));
        setLedgerList((prevListDatas) => [...prevListDatas, ...listData]);
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
      <InputBar />
      <Info />
      <DetailList posts={ledgerList} />
    </>
  );
};

export default MainPage;
