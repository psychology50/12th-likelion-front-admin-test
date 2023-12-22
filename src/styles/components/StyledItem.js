import styled from "styled-components";

const StyledItem = styled.div`
  display: flex;
  flex-directioin: row;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  padding: 20px 12px;
  border-bottom: 1px solid var(--Line, #d7d7d7);

  color: var(--Title-Active, #1e2222);
  font-family: Noto Sans KR;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 122.222% */
`;

export default StyledItem;
