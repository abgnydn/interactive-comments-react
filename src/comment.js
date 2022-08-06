import React from "react";
import ContentSection from "./contentSection";
import ScoreButton from "./buttons/scoreButton";
import ReplyButton from "./buttons/replyButton";
import DeleteButton from "./buttons/deleteButton";
import EditButton from "./buttons/editButton";
import EditSection from "./editSection";
import Replies from "./replies";
import ReplySection from "./replySection";
import { useState } from "react";

const Comment = ({ comment, currentUser }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [editSectionVisibility, setEditSectionVisibility] = useState(false);
  const [replySectionVisibility, setReplySectionVisibility] = useState(false);

  const handleEdit = (e) => {
    e.preventDefault();
    setEditSectionVisibility(!editSectionVisibility);
    setReplySectionVisibility(replySectionVisibility);

  };
  const handleReply = (e) => {
    e.preventDefault();
    setEditSectionVisibility(editSectionVisibility);
    setReplySectionVisibility(!replySectionVisibility);
  };

  return (
    <>
      <div className="flex rounded-xl p-6 bg-white my-3 flex-initial w-full">
        <ScoreButton score={comment.score} />
        <div className="flex flex-col w-full">
          <div className="flex flex-row place-content-between">
            <div className="flex flex-row">
              <img
                src="./images/avatars/image-amyrobson.png"
                className="w-10 h-10 rounded-full mr-3"
                alt=""
              ></img>
              <p className="font-bold mr-3">{comment.user.username}</p>
              {comment.user.username === currentUser.username && (
                <div className="text-white bg-purple-500 px-2  rounded-sm h-2/3 mr-2 ">
                  you
                </div>
              )}
              <div>
                <p className="text-slate-400 break-all font-semibold">
                  {comment.createdAt}
                </p>
              </div>
            </div>
            <div>
              {comment.user.username === currentUser.username ? (
                <div className="flex flex-row">
                  <DeleteButton
                    handleOpen={handleOpen}
                    id={comment.id}
                    open={open}
                    handleClose={handleClose}
                  />
                  <EditButton handleEdit={handleEdit} value={comment.id} />
                </div>
              ) : (
                <ReplyButton
                  reply={null}
                  comment={comment.id}
                  handleReply={handleReply}
                />
              )}
            </div>
          </div>

          {editSectionVisibility ? (
            <EditSection comment={comment} visibility={editSectionVisibility} />
          ) : (
            <ContentSection comment={comment} />
          )}
        </div>
      </div>
          {comment.reply !== null && (
            <div className="w-fit">
              <Replies
                replies={comment.replies}
                currentUser={currentUser}
                handleOpen={handleOpen}
                handleReply={handleReply}
                comment={comment}
              />
            </div>
          )}
      <div>
        <ReplySection
          comment={comment}
          currentUser={currentUser}
          visibility={replySectionVisibility}
          replySection={false}
        />
      </div>
    </>
  );
};

export default Comment;
