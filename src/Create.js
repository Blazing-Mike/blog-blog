import { useState } from "react";
import  { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    const blog = {title, body, author};
   fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(blog)
   }).then(() => {
    console.log('new blog created');
    setIsPending(false);
   navigate("/");
   })

  }
   
  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input type="text" 
        required
         value={title}
         onChange={(e) => setTitle(e.target.value)}
         />
        <label>Blog Body</label>
        <textarea required value={body} onChange={(e) => setBody(e.target.value)}>
            {body}
        </textarea>
        <label>Blog Author</label>
        <select
        value={author}
        onChange={(e) => setAuthor(e.target.value)} >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {! isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Loading...</button>}

      </form>
    </div>
  );
};

export default Create;
