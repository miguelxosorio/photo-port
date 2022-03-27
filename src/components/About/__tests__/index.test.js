import React from 'react';

// 1. The render function will do just what its name implies: "render" the component.
// What actually happens is that Jest creates a simulated DOM in a Node.js environment to approximate the DOM (no component is actually visibly rendered).
// 2. The cleanup function is used to remove components from the DOM to prevent memory leaking,
// as well as variable or data collisions between tests that could corrupt test results.

// functions from the React Testing Library
import { render, cleanup } from '@testing-library/react';
// jest-dom offers access to custom matchers that are used to test DOM elements
import '@testing-library/jest-dom/extend-expect';
// import About component
import About from '..';

// cleanup function using the afterEach global function from Jest
// This will ensure that after each test, we won't have any leftover memory data that could give us false results.
afterEach(cleanup);

// describe() function to declare the component we're testing, the string passed declares which component is being tested
describe('About component', () => {
  // first test
  // it() function - first arg, a string declares what's being tested, 2nd arg, a callback function runs the test
  // verify if the component is rendering
  it('renders', () => {
    render(<About />);
  });

  // second test - also known as Test Case, compare the snapshot versions of the DOM node structure
  it('matches snapshot DOM node structure', () => {
    // render about
    // index.test.js.snap file is a serialized version of the component's node structure, which includefs elements, attributes, and text content
    // folder __snapshots__ will serve as the base model of the component's structure, and will be compared against new snapshots that are created by the asFragment function
    // the asFragment function returns a snapshot of the About component
    const { asFragment } = render(<About />);

    // expect() function with a matcher (toMatchSnapshot) to assert that snapshots will match
    expect(asFragment()).toMatchSnapshot();
  });
});
