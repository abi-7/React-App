import {useState} from 'react';
import classes from './NewPost.module.css';
import Modal from '../components/Modal';

function NewPost({onCancel, onAddPost}) {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function bodyChangeHandler(event){
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event){
      setEnteredAuthor(event.target.value);
  }

  //handles form submission
  function submitHandler(event){
    event.preventDefault();
    //prevenst browser from getting and sending 
    //a HTTP request, which we DO NOT want to do here
    const postData = {
      body: enteredBody,
      author: enteredAuthor
    };

    //usually would validate ->not in this demo
    onAddPost(postData); //will add posts to the 
    onCancel();
  }

  return (
    <Modal>
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler}/>
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
    </Modal>
  );
}

export default NewPost;