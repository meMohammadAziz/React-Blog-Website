// import { useState, useEffect } from "react";
import useFetch from "../customHooks/useFetch";
import BlogList from "./BlogList.component";

const Homepage = () => {
  const {data : blogs , isPending, error} = useFetch('http://localhost:8000/blogs');

  

  return (
    <div className="homepage">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!"></BlogList>}
    </div>
  );
};

export default Homepage;
