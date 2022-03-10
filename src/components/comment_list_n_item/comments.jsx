import React from 'react';
import Comment from './comment';
import style from './comment.module.css';
const Comments = (props) => {
  return (
    <ul className={style.comments}>
      {props.comments.map((comment) => (
        <Comment key={comment.id} comment={comment.snippet} />
      ))}
    </ul>
  );
};

export default Comments;
