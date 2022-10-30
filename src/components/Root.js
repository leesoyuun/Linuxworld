import { Outlet } from "react-router-dom";
import HomePage from "../pages/home/HomePage";

export default function Root() {
  return (
    <>
      <HomePage />
      <Outlet />
    </>
  );
}