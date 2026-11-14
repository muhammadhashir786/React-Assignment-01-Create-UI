import React from "react";
import victoriaImg from "../assets/Image/Victoria Falls.jpg";

export default function DiscoverMore() {
  return (
    <div>
      <h2>Discover More</h2>
      <img
        src={victoriaImg}
        alt="Victoria Falls"
        style={{ width: "320px", display: "block", marginBottom: "8px" }}
      />
      <p style={{ margin: "4px 0" }}>The Majestic Victoria Falls</p>
      <a
        href="https://en.wikipedia.org/wiki/Victoria_Falls"
        target="_blank"
        rel="noreferrer"
      >
        Explore more natural wonders.
      </a>
    </div>
  );
}
