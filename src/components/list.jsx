import ListItem from './listItem';
import style from './list.module.css';
const List = (props) => {
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
