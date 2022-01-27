import React from 'react'
import { screen } from '@testing-library/react';
import renderWithProviders from '../../../utils/test';
import Headlines from '.';

 const mockedHeadlines = [
  {
    title: 'Headline element test title',
    description: 'Headline 1',
    image: 'https://image1.com',
  },
  {
    title: 'Headline element test title',
    description: 'Headline 2',
    image: 'https://image2.com',
  },
];

describe('Headlines', () => {
  it('should render all headline elements', () => {
    renderWithProviders(<Headlines headlines={mockedHeadlines}  />);

    const headlines = screen.getAllByTestId('headline');
    expect(headlines).toHaveLength(2);
  });
});
