import React from "react";
import Posts from "../post/Posts";
import "../core/Home.css";

const Home = () => (
  <div>
    <div className="home home-container">
      <h2 className="home__title">Hi, we're SocaialShare.</h2>
      <h3 className="home__para">Get ready to share your post.</h3>
    </div>
    <div>
      <Posts />
    </div>
  </div>
);

export default Home;
