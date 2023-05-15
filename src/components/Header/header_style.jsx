import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content:center;
    align-items:center;
    position:fixed;
    background-color: rgba(108, 122, 137 / 1) ;
    backdrop-filter: blur(10px);
    width:100%;
    height:12vh;
    border: solid red;
    
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
  justify-content: center;
`
export const Ul = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items:center;
    width: 100%;
    li{
        list-style: none;
        
    }

    a{
        text-decoration:none;
        color:white;
        font-size:1.2rem;
    }
`

export const Logo = styled.div`
border: solid red;
`