import { useContext, useRef } from "react";
import { PostList } from "../Store/Post-list";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdelement = useRef();
  const postTitleelement = useRef();
  const postBodyelement = useRef();
  const Tagselement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdelement.current.value;
    const postTitle = postTitleelement.current.value;
    const postBody = postBodyelement.current.value;
    const Tags = Tagselement.current.value.split(" ");

    userIdelement.current.value = "";
    postTitleelement.current.value = "";
    postBodyelement.current.value = "";
    Tagselement.current.value = "";

    addPost(userId, postTitle, postBody, Tags);
  };

  return (
    <form className="createpost" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userid" className="form-label">
          User Id
        </label>
        <input
          type="text"
          ref={userIdelement}
          className="form-control"
          id="userid"
          placeholder="Your User Id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleelement}
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={postBodyelement}
          rows="4"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          ref={Tagselement}
          className="form-control"
          id="tags"
          placeholder="Enter Tags"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
