import React from "react";
import ScoreButton from "./buttons/scoreButton";
import ReplyButton from "./buttons/replyButton";
import DeleteButton from "./buttons/deleteButton";
import ReplySection from "./replySection";
import { useState } from "react";
import EditButton from "./buttons/editButton";
import EditSection from "./editSection";
import ContentSection from "./contentSection";
const Reply = ({
  handleDecrement,
  handleIncrement,
  currentUser,
  reply,
  comment,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [editSectionVisibility, setEditSectionVisibility] = useState(false);
  const [replySectionVisibility, setReplySectionVisibility] = useState(false);
  const replySection = true;

  const handleEdit = (e) => {
    e.preventDefault();
    setEditSectionVisibility(!editSectionVisibility);
    setReplySectionVisibility(replySectionVisibility);
  };
  const handleReply = (e, key) => {
    e.preventDefault();
    setEditSectionVisibility(editSectionVisibility);
    setReplySectionVisibility(!replySectionVisibility);
  };

  return (
    <>
      <div className="flex p-0 m-0 bg-transparent flex-initial w-full">
        <div className="block w-10 mr-12 border-r-2 h-100"></div>
        <div className="flex rounded-xl p-6 my-2 bg-white  w-full">
          <ScoreButton
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
            score={reply.score}
          />
          <div className="flex flex-col w-full">
            <div className="flex flex-row place-content-between">
              <div className="flex flex-row">
                <img
                  src={reply.user.image.webp}
                  className="w-10 h-10 rounded-full mr-3"
                  alt=""
                ></img>
                <p className="font-bold mr-3">{reply.user.username}</p>
                {reply.user.username === currentUser.username && (
                  <div className="text-white bg-purple-500 px-2  rounded-sm h-2/3 mr-2 ">
                    you
                  </div>
                )}
                <div>
                  <p className="inline-block text-slate-400 font-semibold">
                    {reply.createdAt}
                  </p>
                </div>
              </div>
              {reply.user.username === currentUser.username ? (
                <div className="flex flex-row">
                  <DeleteButton
                    handleOpen={handleOpen}
                    open={open}
                    handleClose={handleClose}
                  />
                  <EditButton handleEdit={handleEdit} value={reply.id} />
                </div>
              ) : (
                <ReplyButton handleReply={handleReply} reply={reply} />
              )}
            </div>

            {editSectionVisibility ? (
              <EditSection comment={reply} visibility={editSectionVisibility} />
            ) : (
              <ContentSection comment={reply} />
            )}
          </div>
        </div>
      </div>
      {reply && (
        <div>
          <ReplySection
            replyId={reply.id}
            comment={comment}
            currentUser={currentUser}
            visibility={replySectionVisibility}
            replySection={replySection}
            reply={reply}
          />
        </div>
      )}
    </>
  );
};

export default Reply;
