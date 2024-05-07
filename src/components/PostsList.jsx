import {useState} from 'react';
import classes from './PostsList.module.css';
import Post from './Post';
import Modal from './Modal.jsx'
import NewPost from './NewPost';

function PostsList({isPosting, onStopPosting}) {
  const [posts, setPosts] = useState([]);//our posts array, setpost updating function

  //triggered when post (form) is submitted
  function addPostHandler(postData){
    setPosts((existingPosts) => [postData, ... existingPosts]);

    //setPosts([postData, ... posts]);
    //this way above we use the spread operator only without the arrow func.
    //similar but, better way to update state if it depends on the previous states
    //snapshot. internally react doesn't run the state updatign funcs instantly,
    //or not guarunteed, instead it schedules the states updates
    //this way we used is a way of making sure that we don't use a old state. 
    //makes sure that React ensures that you gettn he latest correct state for this state update,
    //even if there ar emany pending state updates
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
    <Modal onClose={onStopPosting} >
       <NewPost 
       onCancel={onStopPosting}
       onAddPost={addPostHandler}
      />
    </Modal>
    )}
    {posts.length > 0 && (
      <ul className={classes.posts}>
        {posts.map((post) => (
        <Post key={post.body} author={post.author} body={post.body}/>
        ))}
        </ul>
    )}
    {posts.length === 0 && (
      <div style={{textAlign: 'center', color: 'white'}}>
        <h2>There are no posts yet.</h2>
        <p>Start adding posts!</p>
      </div>
    )}
    </>
    );
}

export default PostsList;