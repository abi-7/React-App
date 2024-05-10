import { useLoaderData } from 'react-router-dom';
import classes from "./PostsList.module.css";
import Post from "./Post";

function PostsList() {
  const posts = useLoaderData();

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
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding posts!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
