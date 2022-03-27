import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from "..";

afterEach(cleanup);

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
]
// mock props
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

// BASELINE AND SNAPSHOT TEST
describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
        />);
    });

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
})

// TEST FOR EMOJI VISIBILITY
describe('emoji visibility', () => {
    it('inserts emoji into the h2', () => {
        // Arrange
        const { getByLabelText } = render(<Nav />);
        
        // Assert
        // use the getByLabelText method and query by the aria-label value, which can be seen in the preceding markup as camera
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
})

// TEST FOR LINK VISIBILITY
describe('links are visible', () => {
    it('inserts text into the links', () => {
        // arrange - getByTestId targets the data-id in jsx element
        const { getByTestId } = render(<Nav />);
        // assert
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})
