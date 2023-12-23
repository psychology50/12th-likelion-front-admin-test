import styled from "styled-components";

const ModalBox = styled.div`
    display: flex;
    margin: -35px auto;
    text-align: center;
    justify-content: flex-start;
    width: 904px;
    height: 76px;
    position: relative;
    border-radius: 10px;
    border: 1px solid var(--Placeholder, #BBB);
    background: var(--Off-white, #FCFCFC);
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.10), 0px 4px 4px 0px rgba(0, 0, 0, 0.10);

    .title {
        color: #00365D;
        font-family: Noto Sans KR;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
    }

    .subtitle {
        padding: initial;
        color:  #1E2222;
        font-family: Noto Sans KR;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;
        background-color: transparent;
        border: 0px;
    }

    .defaultBtn {
        display: inline-flex;
        padding: 8px;
        align-items: center;
        gap: 8px;
        border-radius: 10px;
        background: var(--Placeholder, #BBB);
    }

    .activeBtn {
        display: inline-flex;
        padding: 8px;
        align-items: center;
        gap: 8px;
        border-radius: 10px;
        background: var(--Primary1, #045D8B);
    }

`;

const MiniBox = styled.div`
    width: 137px;
    padding: 5px 0px 16px 23px;
    text-align: left;
    gap: 24px;  
    border: 0px solid Black;

`;

const ContentBox = styled.div`
    width: 221px;
    padding: 5px 0px 16px 23px;
    text-align: left;
    gap: 24px;  
    border: 0px solid Black;

    .input {
        text-align:left;
        border: 0px;
    }
`;
const Line = styled.div`
    margin: 14px 0px 0px 0px;
    border-left: solid #D7D7D7;
    height: 50px;
`;

const CategoryModal = styled.div`
    width: 148px;
    height: 404px;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 1px;
    border-radius: 10px;
    background:#FCFCFC;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.10), 0px 4px 4px 0px rgba(0, 0, 0, 0.10);
    .detailBox {
        display: flex;
        width: 148px;
        height: 57px;
        padding: 16px 24px 0px 24px;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        background-color: transparent;
        border: 0px;
        border: 1px solid #D7D7D7;
        text-align: center;
        color: var(--Title-Active, #1E2222);
        font-family: Noto Sans KR;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: flex-start;
        justify-content: center;
        align-items: center;
    }
`;

const HLine = styled.div`
    border-top: 1px;
    width: 100px;
    margin: auto;
    color: #D7D7D7;
`;

const PaymentBox = styled.div`
    width: 148px;
    height: 230px;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 1px;
    border-radius: 10px;
    border: 1px solid #D7D7D7;
    background:#FCFCFC;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.10), 0px 4px 4px 0px rgba(0, 0, 0, 0.10);
    .detailBox {
        display: flex;
        width: 148px;
        height: 57px;
        padding: 16px 24px 0px 24px;
        flex-direction: row;
        align-items: flex-start;
        gap: 16px;
        background-color: transparent;
        border: 0px;
        border: 1px solid #D7D7D7;
        text-align: center;
        color: var(--Title-Active, #1E2222);
        font-family: Noto Sans KR;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
        justify-content: center;
    }
`;


export {ModalBox, MiniBox, Line, ContentBox, CategoryModal, HLine, PaymentBox}