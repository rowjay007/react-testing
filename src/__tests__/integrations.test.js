import React from "react";
import { mount } from "enzyme";
import App from "../components/App";
import Roots from "../Roots";

it("can fetch a list of comments and display them", () => {
  const wrapped = mount(
    <Roots>
      <App />
    </Roots>
  );

  wrapped.find(".fetch-comments").simulate("click");

  expect(wrapped.find("li").length).toEqual(500);
});
