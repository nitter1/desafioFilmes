import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content:center;
    align-items:center;
    position:fixed;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(15px);
    width:100%;
    height:12vh;
    
    div {
    display: flex;
    align-items: center;
    width: auto;
    justify-content: space-between;
    }
    
`
export const NavItems = styled.nav`
    flex-grow: 1;
  display: flex;
  justify-content: space-around;
`
export const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items:center;
    width: 25%;
    li{
        list-style: none;
        transition: all 0.3s ease;
        &:hover {
    transform: scale(1.05);
    cursor: pointer;
    background: #5a5a5a;
    border-radius: 25px;
  }
    }

    a{
        text-decoration:none;
        color:white;
        -webkit-text-stroke-width: 0.6px;
        -webkit-text-stroke-color: #000;
        font-size:1.5rem;
        font-weight: 800;
        font-family: "Open Sans", Tahoma, Verdana, sans-serif;
    }
`

export const UlTwo = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items:center;
    width: 20%;
    li{
        list-style: none;
        transition: all 0.3s ease;
        &:hover {
    transform: scale(1.05);
    cursor: pointer;
    background: #5a5a5a;
    border-radius: 25px;
  }
        
    }

    a{
        text-decoration:none;
        color:white;
        -webkit-text-stroke-width: 0.6px;
        -webkit-text-stroke-color: #000;
        font-size:1.5rem;
        font-weight: 800;
        font-family: "Open Sans", Tahoma, Verdana, sans-serif;
    }
`


export const Logo = styled.div`
margin-left: 1rem;
`