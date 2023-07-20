
import  {movie_list} from './data';
import { useState } from 'react';

const Action=({onDelete})=>{
  const [likes, setLikes]=useState(0);

  const handleLike=()=>{
    setLikes(likes+1);
  };

  const handleDislike=()=>{
    setLikes(likes-1);
  };
  

  return (
    <div>
      <div onClick={handleLike}><img class="like" src="Vector.png"/>({likes})</div>
      <div onClick={handleDislike}><img class="dislike" src="Icon - Like.png"/></div>
      <div onClick={onDelete}><img class="delete" src="delete.png"></img></div>

    </div>
  );
};

export default Action;

