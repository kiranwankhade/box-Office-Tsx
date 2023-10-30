import React, { useState } from "react";
import usePaginatedFetchMovies from "../../service/PaginateMovie";
import Card, { MovieCardData } from "../../components/Card/Card";

const Home = () => {
  const [page, setPage] = useState<number>(1);
    //here create hook for paginate
  const { data: movies, isLoading } = usePaginatedFetchMovies(page);
  console.log("movies:", movies);
  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div
          className="container"
          style={{
            marginTop: "10px",
          }}
        >
          <div className="row">
            {movies?.map(
              ({ id, poster_path, original_title }: MovieCardData) => {
                return (
                  <Card
                    id={id}
                    poster_path={poster_path}
                    original_title={original_title}
                  />
                );
              }
            )}
          </div>
        </div>
      )}
      <footer style={{ margin: "10px" }}>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => setPage((prevPage) => prevPage - 1)}
          disabled={page === 1 ? true : false}
        >
          Prev
        </button>
        <p style={{ display: "inline", margin: "10px" }}>{page}</p>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => setPage((prevPage) => prevPage + 1)}
          disabled={false}
        >
          Next
        </button>
      </footer>
    </>
  );
};

export default Home;
