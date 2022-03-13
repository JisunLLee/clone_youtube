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
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  useEffect(() => {
    async function getData() {
      const video_detail = await youtube.detail(id);
      const video_comment = await youtube.comment(id);
      setStatistics(video_detail.items[0].statistics);
      setSnippet(location.state.video.snippet);
      setComments(video_comment.items);
    }
    getData();
  }, [location, id, youtube]);
  console.log('snippet', snippet);

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
              <hr />
            </div>

            <div className={style.contents_wrap}>
              <div className={style.channel_wrap}>
                <div
                  alt="channel"
                  className={style.channel}
                  style={{ backgroundColor: '#' + randomColor }}
                >
                  {snippet.channelTitle.split('')[0]}
                </div>
                <h3>{snippet.channelTitle}</h3>
              </div>
              p<div className={style.description}>{snippet.description}</div>
              <p></p>
            </div>
          </div>
          <List videos={location.state.videos} />
          <div>
            <hr />
            <h2>댓글 {statistics.commentCount}개</h2>
            {comments ? (
              <Comments comments={comments} />
            ) : (
              <div>Loading...</div>
            )}
          </div>
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
