import styled from "styled-components";

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .wrapper {
    position: absolute;
    top: 200px;
    width: 900px;
    height: 100%;
  }

  .wrapper__header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .wrapper__body {
    width: 100%;
    height: 100%;
  }
`;

export default StyledMain;
