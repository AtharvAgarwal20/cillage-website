import Navbar from "../components/Landing/Navbar/Navbar";
import styles from "./layout.module.scss";

import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
