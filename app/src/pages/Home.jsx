import { useState, useEffect } from "react"
// import MovieCard from "../components/MovieCard"
import GridMovies from '../components/GridMovies';

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {
  const [topMovies, setTopMovies] = useState([])
  
  const getTopRatedMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    setTopMovies(data.results)
  }

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`
    getTopRatedMovies(topRatedUrl)
  }, [])

  return (
    <div className="container">
      <h2 className="title">Melhores filmes</h2>
      {topMovies.length === 0 && <p>Carregando...</p> }
      <GridMovies />
      
    </div>
  )
}

export default Home