import React, { useEffect, useState } from "react";
import client from "./contentful";

function BlogList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .getEntries({ content_type: "blogPost" })
      .then((response) => {
        setPosts(response.items);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.sys.id}>
          <h2>{post.fields.title}</h2>
          <img
            src={post.fields.coverImage.fields.file.url}
            alt={post.fields.title}
            width="300"
          />
          {/* <p>{post.fields.body.content[0].content[0].value}</p> */}
          <p>{post.fields.body}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
