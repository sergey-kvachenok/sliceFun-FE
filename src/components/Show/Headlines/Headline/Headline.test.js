import { screen } from '@testing-library/react';
import renderWithProviders from '../../../../utils/test';
import Headline from '.';

const headline = {
  title: 'Headline element test title',
  description: 'Headline 1',
  image: 'https://image1.com',
};

describe('Headline', () => {
  it('should render all elements', () => {
    renderWithProviders(<Headline headline={headline} />);

    const title = screen.getByText(headline.title);
    const description = screen.getByText(headline.description);
    const banner = screen.getByTestId('banner');
    const shareIcon = screen.getByTestId('share-icon');
    const posterImage = screen.getByTestId('head-show-image');

    expect(title).toBeVisible();
    expect(description).toBeVisible();
    expect(banner).toBeVisible();
    expect(shareIcon).toBeVisible();
    expect(posterImage).toHaveAttribute('src', headline.image);
  });
});
