import React from "react";
import * as S from "./header_style.jsx";
import Logo from "../../assets/logo.svg"

export default function Header() {
  return (
    <S.HeaderContainer>
      <S.Logo>
        <img src={Logo} alt="Logotipo" />
      </S.Logo>
      <S.NavItems>
        <S.Ul>
          <li>
            <a href="#series">Series</a>
          </li>
          <li>
            <a href="#filmes">Filmes</a>
          </li>
        </S.Ul>

        <S.UlTwo>
          <li>
            <a href="#filtro">Filtro</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
        </S.UlTwo>

      </S.NavItems>
    </S.HeaderContainer>
  );
}
