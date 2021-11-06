import React from "react";
import JSONData from "../../content/my-json-content.json";
const JSONbuildtime = () => (
  <div>
    <h1>{JSONData.title}</h1>
    <ul>
      {JSONData.content.map((data, index) => {
        return <li key={`content_item_${index}`}>{data.item}</li>;
      })}
    </ul>
  </div>
);
export default JSONbuildtime;
