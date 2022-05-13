import React, { useState } from "react";
import classes from "../Sytles/Movie.module.css";
import MovieInfo from "../MovieInfo/MovieInformation";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const Movie = ({
  title,
  poster_path,
  overview,
  release_date,
  vote_average,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModalHandler = (props) => setIsModalOpen(true);
  const closeModalHandler = (props) => setIsModalOpen(false);
  return (
    <>
      {isModalOpen && (
        <MovieInfo
          poster_path={poster_path}
          title={title}
          overview={overview}
          vote_average={vote_average}
          release_date={release_date}
          onClose={closeModalHandler}
        />
      )}
      <div className={classes.movie}>
        <img
          src={
            poster_path
              ? IMG_API + poster_path
              : // 영화포스터 깨질경우 아래 이미지로 대처
                "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80"
          }
          alt={title}
          onClick={openModalHandler}
        />
        <div className="movie-info">
          <h3>{title}</h3>
        </div>
      </div>
    </>
  );
};
export default Movie;
