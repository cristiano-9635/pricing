import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/header";
import Content from "./components/content";
import Hero from "./components/hero";
import Table from "./components/Table";
import Rating from "./components/rating";
import Footer from "./components/footer";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Sidebar />
      <Header />
      <Content />
      <Hero/>
      <Table/>
      <Rating/>
      <Footer/>
    </Router>
  );
}

export default App;
