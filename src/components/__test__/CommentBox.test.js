import React from "react";
import { mount } from "enzyme";
import CommentBox from "../CommentBox";

let wrapped;
beforeEach(() => {
  wrapped = mount(<CommentBox />);
});
afterEach(() => {
  wrapped.unmount();
});

it("has a text area and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});
it("has a text area that user can type in", () => {
  wrapped
    .find("textarea")
    .stimulate("change", { target: { value: "new comment" } });
});
