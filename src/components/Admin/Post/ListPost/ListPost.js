import React, { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { map, size } from "lodash";
import { Post } from "../../../../api";
import { PostItem } from "../PostItem";
import "./ListPost.scss";

const postController = new Post();

export function ListPost() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await postController.getPosts();
        setPosts(response.docs);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  if (!posts) return <Loader active inline="centered" />;
  if (size(posts) === 0) return "No hay ningún post";

  return (
    <div className="list-post">
      {map(posts, (post) => (
        <PostItem key={post._id} post={post} />
      ))}
      <div>{/* Paginacion */}</div>
    </div>
  );
}
