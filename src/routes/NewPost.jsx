import classes from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Link, Form, redirect } from "react-router-dom";

function NewPost() {
  //client side, no actual request sent for 'post'
  //React Router behind the scenes will generate a request object
  //with the Form data included in it. and will give this request object
  //a method, which we then could use in action() to find out which form was submitted
  //when action was triggered - in the case of many forms w same route & action
  return (
    <Modal>
      <Form method='post' className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({request}) {
  const formData = await request.formData(); //yields a promise
  const postData = Object.formEntries(formData); // {body: '...', author: '...'}

  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  //generates a response object, which is then returned by this action
  //returning sucha  response object, react router will look into that object
  //if its a reDirect() response, react router will move to that diff route to which you're trying
  //to reDirect
  return redirect('/');
  //after this is called a diff route is loaded, initialize nav action
}
