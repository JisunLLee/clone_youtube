import React from 'react';
import { useEffect, useState } from 'react';
import getYoutube from '../../APIs/getYoutube';
import useAxios from '../../APIs/uesAxios';
import List from '../video_list/list';
import SearchHeader from '../search_header/searchHeader';
import style from './main.module.css';
import { useLocation, useParams } from 'react-router';

const Main = (props) => {
  const location = useLocation();

  const [youtube_params, setYoutube_params] = useState();
  const [params, setParams] = useState();
  const [videos, setVideos] = useState();
  useEffect(() => {
    location.pathname === '/'
      ? setParams({
          kind: 'videos',
          chart: 'mostPopular',
          regionCode: 'KR',
          maxResults: 25,
        })
      : setParams({
          kind: 'search',
          maxResults: 25,
          type: 'video',
          q: location.pathname,
        });
    setYoutube_params(getYoutube(params));
  }, [location]);

  useEffect(() => {
    params ? setYoutube_params(getYoutube(params)) : setYoutube_params();
    console.log('[params] changed');
  }, [params]);

  const { response, error, finish } = useAxios({
    url: youtube_params,
    method: 'get',
    dataType: 'json',
  });

  useEffect(() => {
    response ? setVideos(response.items) : setVideos();
  }, [response]);

  return (
    <div className={style.main}>
      <SearchHeader />
      {videos ? <List videos={videos} /> : <div>Loading...</div>}
    </div>
  );
};

export default Main;
