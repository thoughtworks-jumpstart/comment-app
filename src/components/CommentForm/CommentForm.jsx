import React, { useState } from "react";
import { isFulfilled } from "q";

function CommentForm() {
  const [commentTextArea, setCommentTextArea] = useState("");
  const [authorInput, setAuthorInput] = useState("");

  const isNotFilled = () => {
    return !(authorInput && commentTextArea)
  };

  const handleAuthorInput = (event) => {
    setAuthorInput(event.target.value)
  }

  const handleCommentTextArea = (event) => {
    setCommentTextArea(event.target.value)
  }

  return (
    <form>
      <div className="form-group">
        <textarea
          value={commentTextArea}
          onChange={handleCommentTextArea}
          className="form-control"
          placeholder="Write something..."
          rows="4"
          cols="50"
        />
      </div>
      <div className="form-group">
        <label htmlFor="name-input">Your Name</label>
        <input value={authorInput} onChange={handleAuthorInput} className="form-control" type="text" id="name-input" />
      </div>
      <button disabled={isNotFilled()} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default CommentForm;
