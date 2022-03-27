import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";

// About component - App() child
function About() {
  return (
    // JSX
    // must have only one parent element, in this case the <section>
    // JSX has className = HTML5 class; can use {} syntax from js 
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    </section>
  );
}

export default About