import React, { memo } from 'react';
import { useEffect, useState } from 'react';
import List from '../video_list/list';
import style from './main.module.css';
import { useLocation } from 'react-router';

const Main = memo(({ youtube }) => {
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
      {videos ? <List videos={videos.items} /> : <div>Loading...</div>}
    </div>
  );
});

export default Main;
