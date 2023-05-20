import styled from "styled-components";

export const ContainerMain = styled.section`
    background-image: url(${props => props.background});
    background-size: 100%, 100%;
    background-repeat:no-repeat;
    display: flex;
    height: 95vh; /* Adicionado */
`

export const BoxTitle = styled.div`
    width:100%;
    color:white;
display: flex;
flex-direction: column;
justify-content: center;
    background: linear-gradient(to bottom, transparent, black);
    height: 60vh;
    position: relative;
    top: 200px;
`

export const Title = styled.h1`
font-family: "Open Sans", Tahoma, Verdana, sans-serif;
font-size: 27px;
margin-left: 3rem;
`

export const ReleaseTitle = styled.h3`
font-family: "Open Sans", Tahoma, Verdana, sans-serif;
font-size: 1rem;
margin-left: 3rem;
`

export const VoteTitle = styled.h3`
font-family: "Open Sans", Tahoma, Verdana, sans-serif;
font-size: 1rem;
margin-left: 3rem;
`

export const OverviewTitle = styled.h3`
font-family: "Open Sans", Tahoma, Verdana, sans-serif;
font-size: 0.8rem;
width: 60%;
margin-left: 3rem;
`