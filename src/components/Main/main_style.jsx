import styled from "styled-components";

export const ContainerMain = styled.section`
    background-image: url(${props => props.background});
    background-size:100% 100%;
    background-repeat:no-repeat;
    min-height: 100vh;

`

export const BoxTitle = styled.div`
    width:70%;
    border:solid white;
    color:white;
    position: absolute;
    top: 200px;
`