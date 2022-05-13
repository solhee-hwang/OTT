import React from "react";
import Modal from "../Modal/Modal";
import classes from "../Sytles/MovieInfo.module.css";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const MovieInfo = (props) => {
  const infor = (
    <div className={classes.information}>
      <div className="movie-info">
        <img
          src={
            props.poster_path
              ? IMG_API + props.poster_path
              : // 영화포스터 깨질경우 아래 이미지로 대처
                "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80"
          }
          alt={props.title}
        />
        <h1 class="Title">{props.title}</h1>
        <h3>
          개봉일 : {props.release_date} ★ : {props.vote_average}{" "}
        </h3>
      </div>
      <div className="movie-over">
        <h2>Overview:</h2>
        <p>{props.overview}</p>
      </div>
      <button onClick={props.onClose}>close</button>
    </div>
  );
  return <Modal onClose={props.onClose}>{infor}</Modal>;
};

export default MovieInfo;
