import React from "react";
import "./Content.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRedditComments, getRedditPosts } from "../store/redditSlice";
import moment from 'moment';

function Content() {
  const dispatch = useDispatch();
  const reddit = useSelector((state) => state.reddits.chosenSubreddit);
  const posts = useSelector((state) => state.reddits.posts);
  const comment = useSelector((state) => state.reddits.comments);

  useEffect(() => {
    dispatch(getRedditPosts(reddit));
  }, [dispatch]);

  function toggleComments(redditId, redditPermalink) {

    dispatch(getRedditComments(redditPermalink));

    var comments = document.getElementById(redditId);

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
                {reddit.is_video && <video className="content__image" src={reddit.media.reddit_video.fallback_url} controls />}
                {reddit.is_self && <p>{reddit.selftext}</p>}
                {reddit.is_gallery && <img className="content__image" src={reddit.thumbnail} />}
                {!reddit.is_video && !reddit.is_self && !reddit.is_gallery && <img className="content__image" src={reddit.url} />}
                </div>
                <div className="content__info">
                  <p>Author: u/{reddit.author}</p>
                  {/* https://momentjs.com/docs/#/use-it/ */}
                  <p>{moment.unix(reddit.created_utc).fromNow()}</p>
                  <p onClick={() => toggleComments(reddit.id, reddit.permalink)}>Comments</p>
                </div>
                <div id={reddit.id} style={{display: "none"}} className="content__comment__container">
                  {comment.map((comment) => (
                    <div className="content__comments">
                        <p className="content__author">{comment.author} : </p>
                        <p>{comment.body}</p>
                      </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Content;
