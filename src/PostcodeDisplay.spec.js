import React from "react";
import { shallow } from "enzyme";
import PostcodeDisplay from "./PostcodeDisplay";
import * as router from 'react-router'

describe("PostcodeDisplay", () => {
    const navigate = jest.fn()

    beforeEach(() => {
        jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
    })
    it("renders", () => {
        const wrapper = shallow(<PostcodeDisplay />);
        expect(wrapper.exists()).toBe(true);
    });
});