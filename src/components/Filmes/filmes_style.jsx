import styled from "styled-components";

export const Container = styled.section`
    background: linear-gradient(to top, #000 0%, #333333 100%);
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    flex-wrap:wrap;
    color:white;
    border:solid white;
`

export const BoxTitle = styled.div`
    width:100%;
    border:solid white;
    color:white;
    
    h2{
        font-size:1.2rem
    }
`

export const BoxFilms = styled.section`
    width:22%;

    img{
        width:80%;
    }
`