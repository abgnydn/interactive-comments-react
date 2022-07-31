import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import DeleteModal from "./modal";

export default function DeleteButton ({id}){
    const [open,setOpen] = useState(false);  
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)
    return (
        <>
        <div className="text-red-500 flex-row">
            <button className="" onClick={handleOpen}><FaTrash className="inline-block mr-2 mb-1"/><div className="inline-block">Delete</div></button>            
        </div>
        <div>
            <DeleteModal handleClose={handleClose} open={open} id={id}/>
        </div>
        </>
    )
}