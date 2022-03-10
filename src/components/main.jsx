import React from 'react';
import { useEffect, useState } from 'react';
import getYoutube from '../APIs/getYoutube';
import useAxios from '../APIs/uesAxios';
import List from './list';
import SearchHeader from './searchHeader';
import style from './main.module.css';
import { useLocation, useParams } from 'react-router';

const Main = (props) => {
  const location = useLocation();

  const [youtube_params, setYoutube_params] = useState('');
  const [params, setParams] = useState('');

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
    setYoutube_params(getYoutube(params));
  }, [params]);

  const { response, error, finish } = useAxios({
    url: youtube_params,
    method: 'get',
    dataType: 'json',
  });

  return (
    <div className={style.main}>
      <SearchHeader />
      {finish ? (
        response ? (
          <List videos={response.items} />
        ) : (
          <div>Loading...</div>
        )
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Main;
