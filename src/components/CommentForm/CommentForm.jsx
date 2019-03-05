import React, { useState } from "react";

function CommentForm({handleSubmit}) {
  const [commentTextArea, setCommentTextArea] = useState("");
  const [authorInput, setAuthorInput] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(authorInput, commentTextArea);
  };

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
    <form onSubmit={onSubmit}>
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
