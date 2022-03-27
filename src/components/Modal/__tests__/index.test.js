import React from "react";
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from "..";

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
}

afterEach(cleanup);

const mockToggleModal = jest.fn();

describe('Modal Component', () => {
    it('renders', () => {
        render(<Modal />);
    })

    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Modal />)

        expect(asFragment()).toMatchSnapshot();
    });
})

describe('Click Event', () => {
    it('calls onClose handler', () => {
      const { getByText } = render(<Modal
        onClose={mockToggleModal}
        currentPhoto={currentPhoto}
      />);
      // eslint-disable-next-line testing-library/prefer-screen-queries
      fireEvent.click(getByText('Close this modal'));
  
      expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
})  