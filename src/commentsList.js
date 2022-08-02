import Replies from "./replies";
import ScoreButton from "./scoreButton";
import ReplyButton from "./replyButton";
import DeleteButton from "./deleteButton";
import EditButton from "./editButton";
import ReplySection from "./replySection";
import { useState } from "react";
import EditSection from "./editSection";
export default function CommentsList({ comments, currentUser, handleOpen }) {
  const [replySection, setReplySection] = useState(false);

  const handleReply = (e) => {
    e.preventDefault();
    setReplySection(!replySection);
    setEditSection(editSection);
  };
  const [editSection, setEditSection] = useState(false);

  const handleEdit = (e) => {
    e.preventDefault();
    setEditSection(!editSection);
    setReplySection(replySection);
  };
  return (
    <div className="grid place-items-center my-20">
      <div>
      <div className="flex lg:w-3/5 flex-col md:w-2/3 sm:w-full shrink-0">
        {comments.map((comment) => (
          <div key={comment.id}>
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
                      <p className=" text-slate-400 break-all">
                        {comment.createdAt}
                      </p>
                    </div>
                  </div>
                  <div>
                    {comment.user.username === currentUser.username ? (
                      <div className="flex flex-row">
                        <DeleteButton handleOpen={handleOpen} id={comment.id} />
                        <EditButton handleEdit={handleEdit} />
                      </div>
                    ) : (
                      <ReplyButton handleReply={handleReply} />
                    )}
                  </div>
                </div>

                <p className="text-slate-600 break-all">{comment.content}</p>
              </div>
              
            </div>

            {comment.reply !== null && (
              <div className="w-fit">
                <Replies
                  replies={comment.replies}
                  handleReply={handleReply}
                  currentUser={currentUser}
                  handleOpen={handleOpen}
                />
              </div>
            )}
            <div>
                <EditSection
                  visibility={editSection}
                  currentUser={currentUser}
                />
                <ReplySection
                  visibility={replySection}
                  currentUser={currentUser}
                  id={comment.id}
                />
              </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
