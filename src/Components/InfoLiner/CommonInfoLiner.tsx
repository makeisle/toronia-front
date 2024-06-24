import React, {ReactNode} from "react";
import styled from 'styled-components'
interface Props {
    children: ReactNode;
}

const StyledInfo = styled.div`
        align-self: stretch;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-end;
        padding: 4px 0px;
        gap: 10px;
        text-align: center;
    `

export const InfoLinerRight = ({
                              children
                               }: Props): JSX.Element => {
    return (
        <StyledInfo>
            {children}
        </StyledInfo>
    );
};
