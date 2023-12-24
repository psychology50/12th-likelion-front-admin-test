import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  height: 146px;
  background-color: #045d8b;
  padding: 28px;
  position: absolute;
  top: 0;
  left: 0;

  .Wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .LogoBox {
    color: white;
  }
  .Date {
    color: white;
  }
  .InputWrapper {
    width: 900px;
    height: 75px;
    border-radius: 10px;
    border: 1px solid var(--Line, #d7d7d7);
    background: var(--Off-white, #fcfcfc);

    /* Elevation1 */
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1),
      0px 4px 4px 0px rgba(0, 0, 0, 0.1);

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: absolute; /* 절대 위치로 설정하여 다른 요소 위에 겹치도록 함 */
    top: 110px;
    left: 50%; /* 가운데 정렬을 위해 왼쪽 50%로 이동 */
    transform: translateX(-50%); /* 왼쪽으로 50%만큼 이동하여 가운데 정렬 */
    background-color: white;
    padding: 10px;
    z-index: 1; /* 겹치는 순서를 설정하여 다른 요소 위에 표시될 순서를 지정 */
  }
`;

export default StyledHeader;
