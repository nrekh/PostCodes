import React from "react";
import { shallow,mount } from "enzyme";
import Postcodes from "./Postcodes";
import * as router from 'react-router'

describe("Postcodes", () => {
    const navigate = jest.fn()

    beforeEach(() => {
        jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
    })
    it("renders", () => {
        const wrapper = shallow(<Postcodes />);
        expect(wrapper.exists()).toBe(true);
    });
});