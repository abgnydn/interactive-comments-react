import { GoReply } from "react-icons/go";
export default function ReplyButton({reply, comment, handleReply}){

    return (
        <div  onClick={handleReply} key={reply ? reply.id : comment.id}>
            <button>
              <div className="flex flex-row text-purple-500">
                <GoReply className="mt-1.5 mr-3" />
                <span className="font-bold">Reply</span>
              </div>
            </button>
          </div>
    )
}