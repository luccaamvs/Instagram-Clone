import styled from "styled-components";
import { GlobalColors } from "../../global.styles";

export const Corpo = styled.div`
    width:100%;
    height:100%;

    height: 60px;
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    background-color: #FFF; 
    display: flex;
    align-items: center;
    /* justify-content: space-around; */

    gap: 5px;

    padding: 0 10px;

    overflow: auto;
`

export const ItensContent = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    align-items: center;

    :last-child{
        justify-content: flex-end;
        gap: 15px;
    }

    svg {
        width: 24px;
        height: 24px;
    }
`

export const Itens = styled.a`

    max-width: 128px;
    max-height: 38px;
    color: #000; 

    
    > img{
        width: 100%;
        height: 100%;
    };

`
