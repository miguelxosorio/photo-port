import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Photolist from '..'

afterEach(cleanup)

describe('PhotoList is rendering', () => {
  it('renders', () => {
    render(<Photolist />);
  });

  // eslint-disable-next-line jest/no-identical-title
  it('renders', () => {
    const { asFragment } = render(<Photolist />)
    expect(asFragment()).toMatchSnapshot()
  });
});