import { Outlet } from 'react-router-dom';

import MainHeader from "../components/MainHeader";

function RootLayout() {
    //outlet is a placeholder where the nested routes can render
    //their conetent with the route layout
  return (
    <>
      <MainHeader />
      <Outlet /> 
    </>
  );
}

export default RootLayout;
