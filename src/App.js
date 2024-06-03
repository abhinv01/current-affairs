import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
import Footer from "./components/Footer";

// #f4efea - brown
// #7d141d - red

function App() {
  const [category, setCategory] = useState("general");
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Navbar
        setCategory={setCategory}
        category={category}
        setLoading={setLoading}
      ></Navbar>
      <NewsBoard
        category={category}
        loading={loading}
        setLoading={setLoading}
      ></NewsBoard>
      <Footer></Footer>
    </>
  );
}

export default App;
