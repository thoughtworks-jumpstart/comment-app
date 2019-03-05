import React from "react";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import { render, fireEvent } from "react-testing-library";
import App from "./App";

describe("App", () => {
  test("a new comment can be created", () => {
    const sampleComment = "This is a comment";
    const sampleAuthor = "John";

    const {container, getByText, getByPlaceholderText, getByLabelText}= render(<App />);
    const textArea = getByPlaceholderText("Write something...")  
    const input = getByLabelText("Your Name")
    const button = getByText("Submit")
    fireEvent.change(textArea, { target: { value: sampleComment } })
    fireEvent.change(input, { target: { value: sampleAuthor } })
    fireEvent.click(button)

    const allComments = container.querySelectorAll("blockquote")
    expect(allComments.length).toEqual(1)

  });
});
