import React from "react";
import { CategoryModal, HLine } from "../styles/Nav.styled";

const CategoryDropdown = () => {

    const handleChange = () => {

    }
    return (
        <CategoryModal>
            <button className="detailBox" onClick={handleChange}>생활</button>
            <HLine/>

            <button className="detailBox" onClick={handleChange}>식비</button>
            <HLine/>

            <button className="detailBox" onClick={handleChange}>교통</button>
            <HLine/>

            <button className="detailBox" onClick={handleChange}>쇼핑/뷰티</button>
            <HLine/>

            <button className="detailBox" onClick={handleChange}>의료/건강</button>
            <HLine/>

            <button className="detailBox" onClick={handleChange}>문화/여가</button>
            <HLine/>

            <button className="detailBox" onClick={handleChange}>미분류</button>
            <HLine/>

        </CategoryModal>
    )
}

export default CategoryDropdown;