import React from "react";

export default function WondersList() {
  return (
    <div>
      <h2>Natural Wonders</h2>
      <ol>
        <li>Victoria Falls, Zimbabwe</li>
        <li>Grand Canyon, USA</li>
        <li>Aurora Borealis, Various Countries</li>
        <li>Mount Everest, Nepal</li>
        <li>Great Barrier Reef, Australia</li>
      </ol>
      <p style={{ fontStyle: "italic", paddingLeft: "20px" }}>
        "Nature always wears the colors of the spirit." -{" "}
        <em>Ralph Waldo Emerson</em>
      </p>
    </div>
  );
}
