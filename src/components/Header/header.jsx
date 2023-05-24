import React, { useState, useEffect } from "react";
import * as S from "./header_style.jsx";
import Logo from "../../assets/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Header() {

  return (
    <S.HeaderContainer>
      <S.Logo>
        <a href="/"><img src={Logo} alt="Logotipo" /></a>
      </S.Logo>
      <S.NavItems>
        <S.Ul>
          <li>
            <a href="#">Series</a>
          </li>
          <li>
            <a href="#filmes">Filmes</a>
          </li>
        </S.Ul>

        <S.UlTwo>
          <li>
             <a href="#filtro">
                <FontAwesomeIcon icon={faSearch} /> Filtro
              </a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
        </S.UlTwo>

      </S.NavItems>
    </S.HeaderContainer>
  );
}
