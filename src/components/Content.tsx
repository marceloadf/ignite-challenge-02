import { Header } from "./Header";
import { MovieCard } from "./MovieCard";

interface MovieProps {
  selectedGenre: GenreResponseProp,
  movies: Array<{
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }>,
}

interface GenreResponseProp {
  title: string;
}

export function Content(props: MovieProps) {

  return (
    <div className="container">
    <Header selectedGenre={props.selectedGenre}/>
    <main>
      <div className="movies-list">
        {props.movies.map(movie => (
          <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  </div>
  );
}