import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Header from "./Header";
import ArticleList from "./ArticleList";
// import Article from "./Article";

console.log(blogData);

function App() {
  return (
    <>
    <Header Name="coffee cup" />
    <About/>
    <ArticleList/>
    {/* <Article/> */}
    </>
  );
}

export default App;
