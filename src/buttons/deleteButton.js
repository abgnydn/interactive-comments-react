import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import DeleteModal from "../modal";

export default function DeleteButton ({id,handleOpen,handleClose,open}){
    
    return (
        <>
        <div className="text-red-500 font-bold">
            <button className="flex flex-row flex-nowrap" onClick={handleOpen}><FaTrash className="mr-2 mb-1 inline-block mt-1"/><div className="inline-block">Delete</div></button>            
        </div>
        <div>
            <DeleteModal handleClose={handleClose} open={open} id={id}/>
        </div>
        </>
    )
}