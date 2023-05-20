import { useState, useEffect } from "react"
import * as S from './filmes_style.jsx'
import axios from 'axios'
import Carousel from "../Carousel/carousel.jsx"

export default function Filmes() {
    const [filmes, setFilmes] = useState([])
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        getFilmes(currentPage);
      }, [currentPage]);

    const getFilmes = async (page) => {
        await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=34635a3c54d72514d08fd6979b14e222&language=pt-BR&page=${page}`).then(resposta => {
            const allApi = resposta.data.results.map((item) => {
                const year = item.release_date.split('-')[0].substring(0, 4);
                return {
                    ...item,
                    image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
                    release_year: year
                }
            })
            setFilmes(allApi)
        })

    }


    return (    <>
                <Carousel filmes={filmes}/>
                <S.Container id="filmes">
            {filmes.map((item, index) => (
                <S.BoxFilms key={index}>
                    <img src={item.image} alt={item.title} />
                    <S.TitleFilm>{item.title}</S.TitleFilm>
                    <h5>{item.release_year}</h5>
                </S.BoxFilms>
            ))}
                    <div>
      <button onClick={() => setCurrentPage((prevPage) => prevPage - 1)}>
        Página Anterior
      </button>
      <button onClick={() => setCurrentPage((prevPage) => prevPage + 1)}>
        Próxima Página
      </button>
    </div>
        </S.Container>

        </>
    )
}