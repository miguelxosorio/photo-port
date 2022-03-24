import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from "..";

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

// BASELINE AND SNAPSHOT TEST
describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);
    });

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
})

// TEST FOR EMOJI VISIBILITY
describe('emoji visibility', () => {
    it('inserts emoji into the h2', () => {
        // Arrange
        const { getByLabelText } = render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);
        // Assert
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
})

// TEST FOR LINK VISIBILITY
describe('links are visible', () => {
    it('inserts text into the links', () => {
        // arrange
        const { getByTestId } = render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
        />);
        // assert
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})
