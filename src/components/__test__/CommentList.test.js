import React from "react";
import { mount } from "enzyme";
import CommentList from "../../components/CommentList";

import Root from "../../Roots";

let wrapped;

beforeEach(() => {
  const initialState = { comments: ["Comment 1", "Comment 2"] };
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it("create one LI per comment", () => {
  console.log(wrapped.find("li").length);
});
