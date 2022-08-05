import { MdOutlineModeEditOutline } from "react-icons/md";
export default function EditButton ({handleEdit}){
    
    return (
        <>
        <div className="text-purple-500 font-bold ml-4">
            <button className="flex flex-row flex-nowrap" onClick={handleEdit}><MdOutlineModeEditOutline className="mr-1 mb-1 inline-block mt-1"/><div className="inline-block">Edit</div></button>            
        </div>
        <div>
        </div>
        </>
    )
}