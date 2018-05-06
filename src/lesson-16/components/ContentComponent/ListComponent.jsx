import * as React from 'react';
import { ListItem } from "./ListItemComponent.jsx";

export const List = (props) => {
  let commentsElements = props.comments.map((comment, i) => {
    return <ListItem text={comment.title}/>
  });

  return <ul>
    {commentsElements}
  </ul>
};