import PostsList from "../components/PostsList";
import { Outlet } from 'react-router-dom';

function Posts() {
  //adding outlet here helps with the overlay
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

//executes on client side - browser
export async function loader() {
  const response = await fetch('http://localhost:8080/posts');
  const resData = await response.json();
  return resData.posts;
}
