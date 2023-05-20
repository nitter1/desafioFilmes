import styled from "styled-components";

export const Container = styled.section`
    background: #0b0b0b;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    flex-wrap:wrap;
    color:white;
`

export const BoxFilms = styled.section`
    width:23%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 2rem;

    img{
        width:100%;
    }
`

export const TitleFilm = styled.h5`
color: white;
margin-top: 1rem;
`
