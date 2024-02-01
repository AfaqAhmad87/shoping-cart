import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import "./index.css";
import Cart from "./components/Cart";
function App() {
  const [data, setdata] = useState(true);

  return (
    <>
      <Navbar setdata={setdata} />
      {data ? <Card /> : <Cart />}
    </>
  );
}

export default App;
