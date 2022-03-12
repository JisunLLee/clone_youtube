import React, { memo, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useLocation, useParams } from 'react-router';
import style from './detail.module.css';
import List from '../video_list/list';
import Comments from '../comment_list_n_item/comments';
const Detail = memo(({ youtube }) => {
  const { id } = useParams();
  const [snippet, setSnippet] = useState();
  const [statistics, setStatistics] = useState();
  const [comments, setComments] = useState();
  const location = useLocation();
  console.log('id', id);

  useEffect(() => {
    const getData = async () => {
      Promise.all([youtube.detail(id), youtube.comment(id)]).then(function (
        results
      ) {
        setStatistics(results[0].data.items[0].statistics);
        setSnippet(results[0].data.items[0].snippet);
        setComments(results[1].data.items);
      });
    };
    getData();
  }, [location, id, youtube]);

  return snippet ? (
    statistics ? (
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
                <img alt="channel"></img>
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
    ) : (
      <div>Loading...</div>
    )
  ) : (
    <div>Loading...</div>
  );
});

export default Detail;
