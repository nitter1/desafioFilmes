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

export const ButtonDiv = styled.div`
margin: 1rem;
width: 35%;
display: flex;
justify-content: space-evenly;
`;
export const ButtonAssistir = styled.button`
  width: 15vw;
  height: 8vh;
  border-radius: 20px;
  border: none;
  background: #d53a00;
  color: #f2f2f2;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background: #a22f00;
    cursor: pointer;
  }
`;
export const ButtonTrailer = styled.button`
  width: 15vw;
  height: 8vh;
  border-radius: 20px;
  border: none;
  background: #717171;
  color: #f2f2f2;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background: #5a5a5a;
    cursor: pointer;
  }
`;