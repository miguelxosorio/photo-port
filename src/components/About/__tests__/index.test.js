import React from "react";

// 1. The render function will do just what its name implies: "render" the component.
// What actually happens is that Jest creates a simulated DOM in a Node.js environment to approximate the DOM (no component is actually visibly rendered).

// 2. The cleanup function is used to remove components from the DOM to prevent memory leaking, 
// as well as variable or data collisions between tests that could corrupt test results.
import{ render, cleanup } from '@testing-library/react'
// jest-dom offers access to custom matchers that are used to test DOM elements
import '@testing-library/jest-dom/extend-expect';
// import about component
import About from "..";

afterEach(cleanup);

// the string passed declares which component is being tested
describe('About component', () => {
    // first test
    // first arg, a string declares what's being tested, 2nd arg, a callback function runs the test
    it('renders', () => {
        render(<About />)
    });
    
    // second test
    it('matches snapshot DOM node structure', () => {
        // render about
        // index.test.js.snap file is a serialized version of the component's node structure, which includefs elements, attributes, and text content
        // folder __snapshots__ will serve as the base model of the component's structure, and will be compared against new snapshots that are created by the asFragment function
        const { asFragment } = render(<About />);

        expect(asFragment()).toMatchSnapshot();
    });
})