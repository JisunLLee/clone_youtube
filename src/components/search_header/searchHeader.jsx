import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import style from './searchHeader.module.css';
const SearchHeader = (props) => {
  const [input, setInput] = useState();
  const navigate = useNavigate();
  const LinkToMain = () => {
    navigate(`/${input}`);
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') LinkToMain();
  };
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
          onKeyPress={onKeyPress}
        />
        <button className={style.search_btn} onClick={LinkToMain} />
      </div>
      <div className={style.side} />
    </div>
  );
};

export default SearchHeader;
