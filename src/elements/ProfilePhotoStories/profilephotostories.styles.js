import styled from "styled-components";
import { GlobalColors } from "../../global.styles";

export const Container = styled.div`
    width: 56px;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`

export const Wrapper = styled.div`

    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;

    > p {
        width: 100%;
        overflow: hidden;
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    
`

export const PhotoContainer = styled.div`
    min-width: 60px;
    min-height: 60px;

    width: 60px;
    height: 60px;

    max-width: 60px;
    max-height: 60px;

    border-radius: 50%;
    border: solid 2px #222;
    
    padding: 2px;

    > img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: solid 2px ${GlobalColors.borderGray};
       
    }
`