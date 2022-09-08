import React from 'react';
import { Post } from '.';

function Home(props) {
  
  const posts = props.posts;
  console.log(posts, 'fromHome');
  return (
    <div>
      {posts.map((pos) => (
        <Post post={pos} key={pos.id} />
      ))}
    </div>
  );
}

export default Home;
