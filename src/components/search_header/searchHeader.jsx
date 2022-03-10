import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './searchHeader.module.css';
const SearchHeader = (props) => {
  const [input, setInput] = useState();
  return (
    <div className={style.body}>
      <div className={style.side}>
        <div className={style.side_empty}></div>
        <Link to="/">
          <button className={style.youtube_btn}></button>
        </Link>
      </div>
      <div className={style.search_wrap}>
        <input
          className={style.search_input}
          type="text"
          onInput={(e) => setInput(e.target.value)}
        ></input>
        <Link to={`/${input}`}>
          <button className={style.search_btn}></button>
        </Link>
      </div>
      <div className={style.side} />
    </div>
  );
};

export default SearchHeader;
