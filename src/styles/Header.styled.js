import styled from "styled-components";


const HeaderBox = styled.div`
    width: 100vw;
    height: 146px;
    flex-shrink: 0;
    background: var(--Background, #045D8B);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeaderInBox = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin: auto;
    width: 848px;
    height: 90px;
    flex-shrink: 0;
    align-items: center;

    .logo {
        background-color: transparent;
        border: 0px;
        text-align: left;
        color: #FCFCFC;
        font-family: Outfit;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .iconBox {
        display: flex;
        justify-content: center;
        text-align: right;
        align-items: center;
    }
    .icon {
        text-align: right;
        background-color: transparent;
        border: 0;
        float:right;
    }
`

const DateBox = styled.div`
    display:flex;
    margin: auto;
    text-align: center;
    width: 400px;
    height: 80px;
    .title {
        color: #FCFCFC;
        margin: auto;
        font-family: Outfit;
        font-size: 48px;
        font-style: normal;
        font-weight: 600;
        line-height: 56px; 
    }
    .subtitle {
        margin: auto;
        color: #FCFCFC;
        font-family: Outfit;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px; 
    }
    .leftArrowBtn {
        float: left;
        margin: auto;
        width: 24px;
        height: 24px;
        background-color: transparent;
        border: 0;
    }

    .rightArrowBtn {
        float: right;
        margin:auto;
        width: 24px;
        height: 24px;
        background-color: transparent;
        border: 0;
    }   
`

export {HeaderBox, HeaderInBox, DateBox}