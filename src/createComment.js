import {useState} from "react";
export default function CommentForm({currentUser, currentUserId}){
    const [body,setBody] = useState('');
    const score = 0;
    const id = currentUserId;
    const content = body;
    const createdAt = "";
    const replies = [];
    const user = currentUser;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newComment = { id: id,  content: content, createdAt: createdAt, score:score, user: user, replies: replies };
    
        fetch('http://localhost:3001/comments', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newComment)})
          .then(() => {
          console.log('new comment added');
        })
      }
    
    return(
        <div className="grid place-items-center">
        <div className="flex flex-row max-w-2xl p-6 bg-white rounded-xl">
            <form onSubmit= {handleSubmit} className="grid grid-cols-12 gap-2">
                <img src={user.image.png} className="rounded-full w-4 h-4 col-span-1" alt=""></img>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)} placeholder="Add a comment..." cols="50" rows="4" className="col-span-8 border-slate-300 border rounded-sm p-3 resize-none"></textarea>
                <button className="text-white bg-purple-500 font-bold rounded-lg mx-4 h-2/5 col-span-3">Send</button>
            </form>
        </div>
        </div>
    );
}