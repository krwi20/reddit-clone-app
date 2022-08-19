import React from "react";

function Post(props) {
  const subreddit = { props };

  return (
    <div>
      <h1>{subreddit.title}</h1>
      <img src={subreddit.url} />
    </div>
  );
}

export default Post;
