import { FaTrash } from "react-icons/fa";
export default function DeleteButton ({handleOpen}){
    return (
        <div className="text-red-500 flex-row">
            <button className="" onClick={handleOpen}><FaTrash className="inline-block mr-2 mb-1"/><div className="inline-block">Delete</div></button>            
        </div>
    )
}