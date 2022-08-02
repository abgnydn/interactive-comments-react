import { useState, useEffect } from "react";
import CommentsList from "./commentsList";
import CommentForm from "./createComment";

export default function App() {
  const [comments, setComments] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/comments")
      .then((res) => {
        return res.json();
      })
      .then((data) => setComments(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/currentuser")
      .then((res) => {
        return res.json();
      })
      .then((userData) => setCurrentUser(userData));
  }, []);





  return (
    <>
      <div>
        {currentUser && comments && (
          <CommentsList
            comments={comments}
            currentUser={currentUser}
          />
        )}
      </div>
      <div>
        {currentUser && (
          <CommentForm currentUser={currentUser} comments={comments} />
        )}
      </div>
    </>
  );
}
