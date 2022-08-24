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

  function toggleComments(a) {
    var comments = document.getElementById(a);

    if(comments.style.display === "none") {
      comments.style.display = "flex";
    } else {
      comments.style.display = "none";
    }
  }

  return (
    <>
      {posts.map((reddit) => (
        <div key={reddit.id} className="content">
          <div className="content__container">
            <div className="content__details">
              <h1>{reddit.title}</h1>
                <div className="content__image__container">
                {/* If the url does not include a jpg - if the post isnt an image - use a reddit logo as a placeholder */}
                {/* If image is clicked takes you to the actual reddit post */}
                {(reddit.url).includes("jpg")  ? <a href={`https://www.reddit.com${reddit.permalink}`} target="_blank"><img className="content__image" 
                src={reddit.url} /></a> : <a href={`https://www.reddit.com${reddit.permalink}`} target="_blank"><img className="content__image" src="http://t1.gstatic.com/images?q=tbn:ANd9GcThsotATP9ktYH_-oqNK6lYSI2USCxC-9nhbqScnKqvWFyxmL64"/></a>}
                </div>
                <div className="content__info">
                  <p>Author: u/{reddit.author}</p>
                  {/* https://momentjs.com/docs/#/use-it/ */}
                  <p>{moment.unix(reddit.created_utc).fromNow()}</p>
                  <p onClick={() => toggleComments(reddit.id)}>Comments</p>
                </div>
                <div className="content__comment__container">
                  <div id={reddit.id} style={{display: "none"}}>
                    <p>{reddit.title}</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Content;
