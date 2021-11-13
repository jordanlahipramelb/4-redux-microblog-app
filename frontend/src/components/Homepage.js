import React from "react";
import TitleList from "./TitleList";

const Homepage = () => {
  return (
    <div className="Homepage">
      <h3 className="text-center">
        Welcome to <b>Microblog!</b>
      </h3>
      <TitleList />
    </div>
  );
};

export default Homepage;
