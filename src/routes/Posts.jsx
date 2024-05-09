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
