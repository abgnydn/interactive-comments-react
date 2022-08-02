import { GoReply } from "react-icons/go";

export default function ReplyButton({handleReply, reply}){
    return (
        <div>
            <button onClick={handleReply}>
              <div className="flex flex-row text-purple-500">
                <GoReply className="mt-1.5 mr-3" />
                <span className="font-bold">Reply</span>
              </div>
            </button>
          </div>
    )
}