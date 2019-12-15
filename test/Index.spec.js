import { shallowMount } from "@vue/test-utils";
import Index from "~/pages/index";
import axios from "axios";
jest.mock("axios");

describe("Example 1", () => {
  const wrapper = shallowMount(Index);
  wrapper.vm.$axios = axios;
  test("Test info data...", () => {
    const data = {
      data: {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
      }
    }
    // axios.get.mockResolvedValue(data);
    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    wrapper.vm.$nextTick(async () => {
      await wrapper.vm.fetch_1();
      await expect(wrapper.vm.info).toEqual(data.data);
    })
  });
});
