import React from "react";
import styled, {css} from "styled-components";

interface Props {
    className?: any;
    isInteracted: boolean;
    count: number;
    clickHandler?: ()=>void;
    onImg: string;
    offImg: string;
}
const StyledCIButton = styled.div<{ $interacted: boolean }>`
        -webkit-backdrop-filter: blur(4px) brightness(100%);
        backdrop-filter: blur(4px) brightness(100%);
        border: 1px solid;
        border-radius: 5px;
        display: inline-flex;
        gap: 2px;
        overflow: hidden;
        padding: 4px;
        position: relative;
        ${props => props.$interacted?
    css`
        align-items: center;
        border-color: ${(props)=>props.theme.positive};
        justify-content: center;
        `:
    css`
        align-items: flex-start;
        border-color: #e3e3e3;
        `}
    `

const StyledCIImg = styled.img`
        height: 15px;
        position: relative;
        width: 15px;
    `

const StyledCINum = styled.div`
        color: ${props => props.theme.textColor};
        letter-spacing: 0;
        margin-top: -1px;
        position: relative;
        text-align: center;
        width: fit-content;
        ${(props)=>props.theme.fonts.main}
    `

export const CommonInteract = ({isInteracted = false, count, clickHandler = ()=>{}, onImg, offImg }: Props): JSX.Element => {

    return (
        <StyledCIButton onClick={clickHandler} $interacted={isInteracted}>
            <StyledCIImg
                className="material-symbols"
                alt="Material symbols"
                src={isInteracted ? onImg : offImg}
            />
            <StyledCINum className="num-pick">{count}</StyledCINum>
        </StyledCIButton>
    );
};

