import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../Store/Post-list";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <img src={post.image} className="corner-logo" alt={post.title} />
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <button className="btn btn-sm btn-outline-danger">
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deletePost(post.id)}
            >
              <MdDelete />
            </span>
          </button>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tags) => (
          <span key={tags} className="badge text-bg-primary hashtag">
            {tags}
          </span>
        ))}
        <div className="d-flex gap-2 reaction">
          <button className="btn btn-sm btn-outline-primary">
            👍 <span className="badge bg-primary">{post.reaction}</span>
          </button>
          <button className="btn btn-sm btn-outline-danger">
            ❤️ <span className="badge bg-danger">5</span>
          </button>
          <button className="btn btn-sm btn-outline-warning">
            😂 <span className="badge bg-warning text-dark">2</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
