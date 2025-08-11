import { createContext, useReducer } from "react";
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostlist, action) => {
  let newPostList = currPostlist;
  if (action.type === "DELETE_POST") {
    newPostList = currPostlist.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostlist];
  }
  return newPostList;
};

const PostlistProvider = ({ children }) => {
  const [postlist, disPostlist] = useReducer(postListReducer, defPost);

  const addPost = (userId, postTitle, postBody, Tags) => {
    disPostlist({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reaction: 7,
        userid: userId,
        tags: Tags,
      },
    });
  };

  const deletePost = (postId) => {
    disPostlist({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postlist, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const defPost = [
  {
    id: "1",
    title: "Facebook",
    body: "Your day. Your plan. Your success. 📅💼",
    reaction: 7,
    userid: "usg-1",
    tags: [
      "#StayOrganized",
      "#PlanYourDay",
      "#BusinessGrowth",
      "#SuccessJourney",
    ],
    image: "./Facebook.jpg",
  },
  {
    id: "2",
    title: "Twitter (X)",
    body: "Turn deadlines into done lines. ⏳➡️✅",
    reaction: 9,
    userid: "usg-1",
    tags: ["#TimeManagement", "#DailyTasks", "#Efficiency"],
    image: "./Twitter.jpg",
  },
  {
    id: "3",
    title: "Instagram",
    body: "Plan it. Do it. Done. ✍️✅",
    reaction: 5,
    userid: "usg-1",
    tags: [
      "#ProductivityGoals",
      "#WorkSmarter",
      "#DailyPlanning",
      "#SuccessMindset",
    ],
    image: "./insta.jpeg",
  },
];

export default PostlistProvider;

