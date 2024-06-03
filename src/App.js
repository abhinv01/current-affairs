import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
import Footer from "./components/Footer";

// #f4efea - brown
// #7d141d - red

function App() {
  const [category, setCategory] = useState("general");
  return (
    <>
      <Navbar setCategory={setCategory} category={category}></Navbar>
      <NewsBoard category={category}></NewsBoard>
      <Footer></Footer>
    </>
  );
}

export default App;
