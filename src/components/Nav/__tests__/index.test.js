/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from "..";

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
]

// mock props
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup);

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
        const { asFragment } = render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
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
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
        />);
        
        // Assert
        // use the getByLabelText method and query by the aria-label value, which can be seen in the preceding markup as camera
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
})

// TEST FOR LINK VISIBILITY
describe('links are visible', () => {
    it('inserts text into the links', () => {
        // arrange - getByTestId targets the data-id in jsx element
        const { getByTestId } = render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
        />);
        // assert
        
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})

describe('onClick events', () => {
    it('calls the click handler when clicked', () => {
      const { getByText } = render(<Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected}
      />);
      fireEvent.click(getByText('About me'))
      fireEvent.click(getByText('Contact'))
      fireEvent.click(getByText('Portraits'))
  
      expect(mockSetContactSelected).toHaveBeenCalledTimes(3);
    });
  })
