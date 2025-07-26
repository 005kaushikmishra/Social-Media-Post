import { useContext } from "react";
import Post from "./Post";
import { PostList } from "../Store/Post-list";

const Postlist = () => {
  const { postlist } = useContext(PostList);
  return (
    <>
      {postlist.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default Postlist;
