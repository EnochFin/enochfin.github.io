import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Hello from "../Hello.vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(Hello, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
