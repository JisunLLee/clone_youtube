import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useLocation, useParams } from 'react-router';
import getYoutube from '../../APIs/getYoutube';
import useAxios from '../../APIs/uesAxios';
import SearchHeader from '../search_header/searchHeader';
import style from './detail.module.css';
import List from '../video_list/list';
import Comments from '../comment_list_n_item/comments';
const Detail = () => {
  const { id } = useParams();
  const [statistics_params, setStatistics_params] = useState('');
  const [comments_params, setComments_params] = useState('');
  const [snippet, setSnippet] = useState();
  const [statistics, setStatistics] = useState();
  const [comments, setComments] = useState();
  const location = useLocation();
  console.log('id', id);
  useEffect(() => {
    setStatistics_params(
      getYoutube({
        kind: 'videos',
        part: 'statistics',
        id: id,
      })
    );
    setComments_params(
      getYoutube({
        kind: 'commentThreads',
        videoId: id,
      })
    );
  }, []);

  const { response } = useAxios({
    url: statistics_params,
    method: 'get',
    dataType: 'json',
  });
  const comment_threads = useAxios({
    url: comments_params,
    method: 'get',
    dataType: 'json',
  });

  useEffect(() => {
    if (response) {
      console.log('response??', response);
      setStatistics(response.items[0].statistics);
      setSnippet(response.items[0].snippet);
    }
  }, [response]);

  useEffect(() => {
    if (comment_threads.response) {
      setComments(comment_threads.response.items);
    }
  }, [comment_threads.response]);

  console.log('response', response);
  console.log('comments', comments);
  return (
    <div className={style.main}>
      <SearchHeader />
      {snippet ? (
        statistics ? (
          <main>
            <article>
              <div className={style.player_wrap}>
                <ReactPlayer
                  className={style.player}
                  url={`https://www.youtube.com/watch?v=${id}`}
                  width="100%"
                  height="100%"
                />
              </div>
              <div className={style.article_wrap}>
                <div className={style.title_wrap}>
                  <h1>{snippet.title}</h1>
                  <div>
                    {statistics.viewCount ? (
                      <span>조회수 {statistics.viewCount}회 </span>
                    ) : (
                      <></>
                    )}
                    <span> • </span>
                    <span> {snippet.publishedAt.split('T')[0]}</span>
                  </div>
                  <hr />
                  <div className={style.contents_wrap}>
                    <div className={style.channel_wrap}>
                      <img></img>
                      <h3>{snippet.channelTitle}</h3>
                    </div>
                    <div>{snippet.description}</div>
                    <p></p>
                  </div>
                  {comments ? (
                    <Comments comments={comments} />
                  ) : (
                    <div>Loading...</div>
                  )}
                </div>
                <aside>
                  <List className={style.list} videos={location.state.videos} />
                </aside>
              </div>
            </article>
          </main>
        ) : (
          <div>Loading...</div>
        )
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Detail;
