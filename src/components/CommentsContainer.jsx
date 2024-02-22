/* eslint-disable react/prop-types */
import { User2Icon } from "lucide-react";
import React from "react";
const commentData = [
  {
    name: "Abhyudaya",
    text: "Mai hun bdiaa aadmi",
    replies: [{
        name: "Admin",
        text: "Hey Abhi, why you are so rude?",
        replies:[
            {
                name:"Abhyudaya",
                text:"Kyu bey tere baap ka kuch ja rha hai??",
                replies:[
                    {
                        name:"Modi ji",
                        text:"Relax boys",
                        replies:[
                            {
                                name:"Meloni",
                                text :"Hi modi ji"
                            }
                        ]
                    }
                ]
            }
        ]
    }],
  },
  {
    name: "Bht bada aadmi",
    text: "Mai hun aur bdiaa aadmi",
    replies: [
      {
        name: "Bht bada aadmi",
        text: "Mai hun aur bdiaa aadmi",
        replies: [{ name: "Anonymous", text: "Wow! mai hun tujh sai bhi bada admi!" }],
      },
    ],
  },
];
// eslint-disable-next-line react/prop-types
const Comment = ({ data }) => {
  const { name, replies, text } = data;
  return (
    <>
      <div className="flex shadow-lg rounded-md bg-slate-500 p-2 my-2">
        <User2Icon />
        <div>
          <p>Name:{name}</p>
          <p>Comment:{text}</p>
        </div>
      </div>
    </>
  );
};
const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => (
      <div key={index}>
        <Comment data={comment} />
        {/* Check if replies exist */}
        {comment.replies && (
          <div className="pl-5 border border-l-black ml-5">
            <CommentsList comments={comment.replies} />
          </div>
        )}
      </div>
    ));
  };
  
const CommentsContainer = () => {
  return (
    <div className="p-3">
      <h1 className="font-bold">Comments:</h1>
      <CommentsList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
