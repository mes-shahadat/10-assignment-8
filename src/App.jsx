import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

export default function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <div style={{ height: '100vh' }}></div>
    </>
  )
}