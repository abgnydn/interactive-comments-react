import { useState } from "react";
import axios from "axios";

export default function EditSection({ comment }) {
  const [edit, setEdit] = useState(comment.content);
  const handleSubmit = (e, id) => {
    e.preventDefault();
    const updatedComment = {
      id: comment[id].id,
      content: edit,
      createdAt: comment[id].createdAt,
      score: comment[id].score,
      user: comment[id].user,
      replies: comment[id].replies,
    };

    axios
      .put(`http://localhost:3000/comments/{:id}`, {
        updatedComment,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    e.preventDefault();
    setEdit(e.target.value);
  };
  return (
    <div className="flex min-w-max">
      <form
        onSubmit={handleSubmit}
        className="grid grid-flow-row grid-rows-6 w-full mt-2  gap-5"
        id={comment.id}
      >
        <textarea
          required
          value={edit}
          onChange={handleChange}
          placeholder=""
          cols="50"
          rows="4"
          className="row-span-4 border-slate-300 border rounded-sm p-3 resize-none"
        ></textarea>
        <div className="flex content-end justify-end row-span-2">
          <button className="text-white bg-purple-500 font-bold rounded-lg ml-3 w-1/4">
            UPDATE
          </button>
        </div>
      </form>
    </div>
  );
}
