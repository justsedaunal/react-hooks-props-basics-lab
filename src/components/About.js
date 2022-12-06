import React from "react";
import Links from "./Links";
import user from "../data/user";

function About() {
  console.log();
  return (
    <div id="about">
      <h2>About Me</h2>
      {user ? <p> {user.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links />{" "}
    </div>
  );
}

export default About;
