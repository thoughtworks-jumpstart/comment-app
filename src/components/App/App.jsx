import React, { Component } from "react";
import CommentList from '../CommentList/CommentList';

class App extends Component {
  render() {
    const sampleData=[{comment: "test", author: "John"}, {comment:"test2", author: "Jane"}]
    return (
      <div className="container mt-3">
        <CommentList comments={sampleData}/>
      </div>
    );
  }
}

export default App;
