import styled, { keyframes } from 'styled-components';

// Definir os keyframes
const glowingAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

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
export const Title = styled.h2`
color: white;
background: #0b0b0b;
padding-top: 2rem;
padding-left: 1.5rem;
margin-bottom: -30px;
`

export const Buttons = styled.button`
 width: 220px;
  height: 50px;
  border: none;
  outline: none;
  color: #fff;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;

  &:before {
    content: '';
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: ${glowingAnimation} 20s linear infinite;
    opacity: 0;
    transition: opacity 0.6s ease-in-out;
    border-radius: 10px;
  }

  &:active {
    color: #000;
  }

  &:active:after {
    background: transparent;
  }

  &:hover:before {
    opacity: 1;
  }

  &:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
`;

export const DivButtons = styled.div`
width: 50%;
display: flex;
justify-content: space-evenly;
padding-bottom: 1rem;
`