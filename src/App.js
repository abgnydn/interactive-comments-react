import { useState, useEffect } from "react";
import CommentsList from "./commentsList";
import CommentForm from "./createComment";
import DeleteModal from "./components/modal";

export default function App() {
  const [comments, setComments] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [open,setOpen] = useState(false);  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false)

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


  const handleDelete = (id) => {
    const newComments = comments.filter((comment) => comment.id !== id);
  };
  const handleIncrement = (id) => {
    const score = comments[id].score;
    const newScore = Number(score);
  };
  const handleDecrement = (id) => {
    const score = comments[id].score;
  };
  const handleReply = (id) => {};
  
  return (
    <div>
    <div>
      {currentUser && comments && (
        <CommentsList
          comments={comments}
          handleDelete={handleDelete}
          handleIncrement={handleIncrement}
          handleReply={handleReply}
          handleDecrement={handleDecrement}
          currentUser={currentUser}
          handleOpen={handleOpen}
          
        />
      )}
      
    </div>
    <div>
      {currentUser && <CommentForm currentUser={currentUser} comments={comments} />}
    </div>
      <DeleteModal handleClose={handleClose} open={open} />
    </div>
  );
}
