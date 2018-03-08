import React from "react";
import HomeButton from "./HomeButton";
export default function Home(props) {
  return (
    <div className="container-fluid">
      <div className="row home-row">
        {props.links.map((link, index) => {
          return <HomeButton key={index} link={link}/>;
        })}
      </div>
    </div>
  );
}
