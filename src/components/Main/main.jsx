import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import * as S from "./main_style"
export default function Main() {
    const [filmes, setFilmes] = useState([])
    const [fundo, setFundo] = useState([])

    useEffect(() => {
        getFilmes()

    })

    const getFilmes = async () => {
        await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=34635a3c54d72514d08fd6979b14e222&language=pt-BR&page=1').then(resposta => {
            const allApi = resposta.data.results.map((item) => {
                const year = item.release_date.split('-')[0].substring(0, 4);
                return {
                    ...item,
                    poster: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`,
                    release_year: year
                }
            })
            setFilmes(allApi)
            setFundo(arrayAntiga => arrayAntiga = filmes.slice(0, 1))
        })

    }

    return (
        <>
        <S.ContainerMain background={fundo.map(item => item.poster)} id="main">
            {fundo.map(item => (
                <S.BoxTitle>
                    <S.Title>{item.title}</S.Title>
                    <S.ReleaseTitle>Lançamento: {item.release_year}</S.ReleaseTitle>
                    <S.VoteTitle>Avaliação IMDb: {item.vote_average}/10 <FontAwesomeIcon icon={faStar} style={{color: "#ffd43b",}} /></S.VoteTitle>
                    <S.OverviewTitle>Sinopse: {item.overview}</S.OverviewTitle>
                    <S.ButtonDiv>
                    <S.ButtonAssistir> <FontAwesomeIcon icon={faPlay} /> Assitir Agora </S.ButtonAssistir>
                <S.ButtonTrailer> <FontAwesomeIcon icon={faFilm} /> Trailer </S.ButtonTrailer>
                </S.ButtonDiv>
                </S.BoxTitle>
            ))}
        </S.ContainerMain>
        </>
    )
}