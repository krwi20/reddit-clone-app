import React from "react";
import "./Content.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRedditPosts } from "../store/redditSlice";
import moment from 'moment';

function Content() {
  const dispatch = useDispatch();
  const reddit = useSelector((state) => state.reddits.chosenSubreddit);
  const posts = useSelector((state) => state.reddits.posts);

  useEffect(() => {
    dispatch(getRedditPosts(reddit));
  }, [dispatch]);

  console.log(posts);

  return (
    <>
      {posts.map((reddit) => (
        <div key={reddit.id} className="content">
          <div className="content__container">
            <div className="content__details">
              <h1>{reddit.title}</h1>
              <div className="content__image__container">
                {reddit.is_video === true | reddit.is_gallery === true ? <img className="content__image" src={reddit.thumbnail} /> : <img className="content__image" src={reddit.url}/>}
              </div>
              <div className="content__info">
               <p>Author: u/{reddit.author}</p>
               {/* https://momentjs.com/docs/#/use-it/ */}
               <p>{moment.unix(reddit.created_utc).fromNow()}</p>
               <p>Comments</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Content;
