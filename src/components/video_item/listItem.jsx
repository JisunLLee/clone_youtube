import React from 'react';
import { Link } from 'react-router-dom';
import { beforeTimeMaker } from '../../Utils';
import style from './listItem.module.css';

const ListItem = (props) => {
  const { title, channelTitle, publishTime, thumbnails } = props.video.snippet;
  const time = beforeTimeMaker(publishTime);
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  return (
    <Link
      style={{ textDecoration: 'none', color: 'black' }}
      to={`/detail/${props.video.id.videoId ?? props.video.id}`}
      state={{ videos: props.videos, video: props.video }}
    >
      <li className={style.list_item}>
        <img
          className={style.thumbnail}
          alt="thumbnail"
          src={thumbnails.medium.url}
        />
        <div className={style.detail}>
          <div
            className={style.channel_img}
            alt="channel"
            style={{ backgroundColor: '#' + randomColor }}
          >
            {' '}
            {channelTitle.split('')[0]}
          </div>
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
      </li>
    </Link>
  );
};

export default ListItem;
