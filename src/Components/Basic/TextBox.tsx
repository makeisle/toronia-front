import React from "react";
import styled from 'styled-components'
interface Props {
    className?: any;
    textContent: string;
    clickHandler?: ()=>void;
}



export const TextBox = ({ className = "", textContent, clickHandler = ()=>{} }: Props): JSX.Element => {
    const StyledTextBox = styled.div`
        -webkit-backdrop-filter: blur(4px) brightness(100%);
        align-items: flex-start;
        backdrop-filter: blur(4px) brightness(100%);
        border: 1px solid #e3e3e3;
        border-radius: 5px;
        display: inline-flex;
        gap: 10px;
        overflow: hidden;
        padding: 4px 5px;
        position: relative;
    `

    const StyledTextContent = styled.div`
        color: #000000;
        font-family: "Inter-Regular", Helvetica;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0;
        line-height: normal;
        margin-top: -1px;
        position: relative;
        text-align: center;
        width: fit-content;
    `
    return (
        <StyledTextBox className={`${className}`} onClick={clickHandler}>
    <StyledTextContent>{textContent}</StyledTextContent>
    </StyledTextBox>
);
};
