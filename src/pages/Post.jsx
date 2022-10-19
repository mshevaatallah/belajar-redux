import React from "react";
import { useData } from "../Hook/useData";
function Post() {
  const post = useData("posts");
  const [Data, isLoading, isError] = post;

  if (isError) {
    return <p>error cuy</p>;
  }

  if (!isLoading) {
    return <p>isLoading...</p>;
  }
  return (
    <div>
      <div>
        {Data.map((item) => {
          return (
            <div key={item.id}>
              <b>{item.title}</b>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Post;
