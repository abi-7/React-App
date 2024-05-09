import { useState, useEffect } from "react";
import classes from "./PostsList.module.css";
import Post from "./Post";
import Modal from "./Modal.jsx";
import NewPost from "./NewPost";

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]); //our posts array, setpost updating function
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      console.log.res
      const response = await fetch('http://localhost:8080/posts');
      const resData = await response.json();
      setPosts(resData.posts);
      setIsFetching(false);
    }

    fetchPosts();
  }, []);

  //triggered when post (form) is submitted
  function addPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  //in the ul, we want to transform our array
  //of post objects into an array of JSX elements
  //one post element per post object

  //map - takes a function executed by the browser
  //for every item in this array receiving that item.
  //and then you return the value which this item should be mapped.

  //map returns a new array where every item in that opld array
  //was transformed into a new item, into a new value

  //here we transform every post in post array to a post JSX element
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost 
          onCancel={onStopPosting} 
          onAddPost={addPostHandler} 
          />
        </Modal>
      )}
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding posts!</p>
        </div>
      )}
      {isFetching && (
      <div style={{ textAlign: "center", color: "white" }}>
        <p>Loading Posts...</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
