import React from "react";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import { render } from "react-testing-library";
import CommentForm from "./CommentForm";
import { fireEvent } from 'react-testing-library/dist';

describe("CommentForm", () => {
  test("has a text area, text input and submit button", () => {
    const {getByPlaceholderText, getByLabelText, getByText} = render(<CommentForm />);

    expect(getByPlaceholderText("Write something...")).toBeInTheDocument()
    expect(getByLabelText("Your Name")).toBeInTheDocument()
    expect(getByText("Submit")).toBeInTheDocument()
  });

  test("submit button is disabled on load", () => {
    const {getByText} = render(<CommentForm />);

    expect(getByText("Submit")).toHaveAttribute("disabled")
  });

  test("submit button is enabled after fields are filled in", () => {
    const sampleComment = "Some comment"
    const sampleAuthor = "Mary"

    const {getByPlaceholderText, getByLabelText, queryByText} = render(<CommentForm />);
    
    const textArea = getByPlaceholderText("Write something...")  
    const input = getByLabelText("Your Name")
    fireEvent.change(textArea, { target: { value: sampleComment } })
    fireEvent.change(input, { target: { value: sampleAuthor } })
    
    expect(queryByText("Submit")).not.toHaveAttribute("disabled")
  });

});
