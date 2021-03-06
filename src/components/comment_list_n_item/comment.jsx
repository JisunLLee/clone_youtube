import React from 'react';
import { beforeTimeMaker } from '../../Utils';
import style from './comment.module.css';
const Comment = (props) => {
  const {
    likeCount,
    authorDisplayName,
    authorProfileImageUrl,
    publishedAt,
    textDisplay,
  } = props.comment.topLevelComment.snippet;
  const datetime = beforeTimeMaker(publishedAt);
  return (
    <div className={style.comment}>
      <div className={style.channelImg_wrap}>
        <img src={authorProfileImageUrl} />
      </div>
      <div className={style.comment_wrap}>
        <div>
          <span>{authorDisplayName}</span>
          <span className={style.datetime}>{datetime}</span>
        </div>
        <div>{textDisplay}</div>
        <div>
          <span>
            <span className={style.like_btn}>
              <img className={style.like_btn} src="/images/like.png" />
            </span>
            <span>{likeCount}</span>
          </span>
          <span>
            <img
              className={style.dislike_btn + ' ' + style.like_btn}
              src="/images/like.png"
            />
          </span>
          <span className={style.owner_like}></span>
          <span>답글</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
