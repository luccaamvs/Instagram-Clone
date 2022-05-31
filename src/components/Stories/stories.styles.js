import styled from "styled-components";
import { GlobalColors } from "../../global.styles";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    height: 117px;

    border: solid 1px ${GlobalColors.borderGray};
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    display: flex;

    overflow: auto;

    padding: 16px 10px;

    gap: 20px;
`