import React from "react";
import ReactDOM from "react-dom";
import App from "../App";

it("Show a comment box", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  //Look inside the div
  //and checks to see if the CommentBox is in there
  expect(div.innerHTML).toContain("Comment Box");
  ReactDOM.unmountComponentAtNode(div);
});
