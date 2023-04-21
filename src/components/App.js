import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Header from "./Header";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <>
    <Header Name="coffee cup" />
    <About/>
    <ArticleList/>
    </>
  );
}

export default App;
