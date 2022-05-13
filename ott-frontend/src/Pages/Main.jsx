import React, { useEffect, useState } from "react";
import classes from "../Sytles/Main.module.css";
import Movie from "./Movie";

import { BiSearchAlt2 } from "react-icons/bi";
const API_KEY = process.env.REACT_APP_MOVIE_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=`;
//영화 순위에 따른 정렬?const [searchTerm, setSearchTerm] = useStateState

//영화정보 API

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  //엔터쳤을 때
  const handleOnSubmit = (e) => {
    e.preventDefault();

    // 검색 API호출
    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);

      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // 검색버튼 클릭 시
  const onClick = (e) => {
    e.preventDefault();

    // 검색 API호출
    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);

      setSearchTerm("");
    }
  };
  return (
    <>
      <header className={classes.header}>
        <div>
          <a href="http://localhost:3000/?">
            <img
              class="Logo"
              className={classes.Logo}
              src="https://blog.kakaocdn.net/dn/c4jzIT/btrghQIPMkh/sByblE0p50HHtMiEDdn8k1/img.png"
            />
          </a>
        </div>

        <form onSubmit={handleOnSubmit}>
          <div>
            <button
              type="button"
              id="search_btn"
              onClick={onClick}
              className={classes.button}
            >
              <BiSearchAlt2 className="search_icon"></BiSearchAlt2>
            </button>
            <input
              className={classes.search}
              type="text"
              placeholder="영화 이름 입력"
              value={searchTerm}
              onChange={handleOnChange}
            ></input>
          </div>
        </form>
      </header>

      {/* 포스터 나열 */}
      <div className={classes.movie_container}>
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
};

export default Main;
