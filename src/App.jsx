import React from 'react'
import { createGlobalStyle } from "styled-components"
import Header from "./components/Header/header.jsx"
import Main from "./components/Main/main.jsx"
import Filmes from "./components/Filmes/filmes.jsx"

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: "Open Sans", Tahoma, Helvetica, sans-serif;
}
`


export default function App() {
  return (
    <>
    <Header />
    <Main />
    <Filmes />
    <GlobalStyle />
    </>
  )
}

