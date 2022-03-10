import React from 'react';
import { Link } from 'react-router-dom';
import { beforeTimeMaker } from '../Utils';
import style from './listItem.module.css';

const ListItem = (props) => {
  const { title, channelTitle, publishTime, thumbnails } = props.video.snippet;
  const time = beforeTimeMaker(publishTime);

  return (
    <Link
      style={{ textDecoration: 'none', color: 'black' }}
      to={`/detail/${props.video.id.videoId}`}
      state={{ videos: props.videos }}
    >
      <div className={style.list_item}>
        <img className={style.thumbnail} src={thumbnails.medium.url} />
        <div className={style.detail}>
          <img className={style.channel_img} />
          <div className={style.text_area}>
            <div className={style.title_box}>
              <h4 className={style.title}>{title}</h4>
            </div>
            <div className={style.channel_name}>{channelTitle}</div>
            <div className={style.info}>
              <span className={style.views}>조회수 1.5만회</span>
              <span>•</span>
              <span className={style.time}>{time}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListItem;
