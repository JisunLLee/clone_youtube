import ListItem from '../video_item/listItem';
import style from './list.module.css';
const List = (props) => {
  console.log('List props', props);
  return (
    <ul className={style.videos}>
      {props.videos.map((video) => (
        <ListItem
          key={video.id.videoId ?? video.id}
          videos={props.videos}
          video={video}
        />
      ))}
    </ul>
  );
};

export default List;
