import React from "react";
import { render } from "@testing-library/react";
import Button from "./button";

describe("测试封装的按钮的组件", () => {
  it("1.shoud render the correct default button", () => {
    const wrapper = render(<Button>点击</Button>);
    const element = wrapper.getByText("点击"); //在页面上查找文本为'点击'的元素
    expect(element).toBeInTheDocument(); //判断组件是否在文档中
    expect(element.tagName).toEqual("BUTTON"); //测试查到的元素的是否是button
    expect(element).toHaveClass("btn btn-default"); //测试组件是否有btn btn-default样式
  });
  it("2.shoud render the correct component based on dfferent props", () => {});
  it("3.shoud render a link when btnType equals link and href are provided", () => {});
  it("4.shoud render", () => {});
});
