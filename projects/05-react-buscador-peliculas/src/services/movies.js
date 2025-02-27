const API_KEY = '794e31c2'

export const searchMovies = async ({ search }) => {
  if (search === '') return null

  const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
  const json = await response.json()

  const movies = json.Search

  return movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    image: movie.Poster
  }))
}
