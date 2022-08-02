import axios from 'axios';

export default function DeleteModal({ open, handleClose, id}) {

  const handleDelete = (e) => {
    e.preventDefault();

    axios.delete(`http://localhost:3000/comments/${id}`)
    .then(res => {
      console.log(res);
      console.log(res.data);
    }).then(window.location.reload(false))
    
  };
  
  return (
    <div className={open ? "block" : "hidden"}>
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
      id="my-modal"
    >
      <div className="relative top-20 mx-auto px-7 py-8 border w-96 shadow-lg rounded-md bg-white">
        <div>
        <h4 className="font-bold mb-2 text-xl">Delete Comment</h4>
        <p className="text-slate-500 mb-5">Are you sure you want to delete this comment?This will remove the comment and can't be undone.</p>
        <div className="flex justify-center items-stretch">
          <button onClick={handleClose} className="rounded-lg bg-slate-500 py-2 text-white mr-2 w-full font-bold" >NO, CANCEL</button>
          <button onClick={handleDelete} className="rounded-lg bg-red-500 py-2 text-white w-full font-bold">YES, DELETE</button>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}
