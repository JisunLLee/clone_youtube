import React from 'react';
import { useEffect, useState } from 'react';
import List from '../video_list/list';
import SearchHeader from '../search_header/searchHeader';
import style from './main.module.css';
import { useLocation } from 'react-router';

const Main = ({ youtube }) => {
  const location = useLocation();
  const [videos, setVideos] = useState();

  useEffect(() => {
    async function getData() {
      try {
        location.pathname === '/'
          ? setVideos(await youtube.mostPopular())
          : setVideos(await youtube.search(location.pathname));
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, [location, youtube]);

  return (
    <div className={style.main}>
      <SearchHeader />
      {videos ? <List videos={videos.data.items} /> : <div>Loading...</div>}
    </div>
  );
};

export default Main;
