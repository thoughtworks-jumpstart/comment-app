import React from "react";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect"
import { render } from "react-testing-library";
import CommentCard from "./CommentCard";

describe("CommentCard", () => {
  test("it can display name and comment", () => {
    //Arrange (sample data)
    const sampleComment = "Do or do not, there is no try..."
    const sampleAuthor = "Yoda"
    const props = {
      comment: sampleComment,
      author: sampleAuthor
    }

    //Act (trigger something eg: render, fireEvent)
    const { getByText } = render(<CommentCard {...props}/>);

    //Assert (check the result with expect)
    expect(getByText(sampleComment)).toBeInTheDocument()
    expect(getByText(sampleAuthor)).toBeInTheDocument()
  });
});
