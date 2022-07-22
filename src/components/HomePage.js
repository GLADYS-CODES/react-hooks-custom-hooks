import React, { useEffect, useState } from "react";
import About from "./About";
import ArticleList from "./ArticleList";
import useQuery from "../hooks/useQueryAdvanced";
import useQuery from "../hooks/useQuery";

import useDocumentTitle from "../hooks/useDocumentTitle";

function HomePage() {
  // fetch data for posts
  const { data: posts, isLoaded } = useQuery("http://localhost:4000/posts");


  // useEffect(() => {
  //   setIsLoaded(false);
  //   fetch("http://localhost:4000/posts")
  //     .then((r) => r.json())
  //     .then((data) => {
  //       setData(data);
  //       setIsLoaded(true);
  //     });
      
  // }, ["http://localhost:4000/posts"]);

  // set the document title
  useEffect(() => {
    document.title = "Underreacted | Home";
  }, []);

  return (
    <>
      <About />
      {isLoaded ? <ArticleList posts={posts} /> : <h3>Loading...</h3>}
    </>
  );
}

export default HomePage;
