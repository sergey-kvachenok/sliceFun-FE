import { screen } from '@testing-library/react';
import renderWithProviders from '../../../../utils/test';
import Info from '.';
import verifiedEn from '../../../../translations/en/verified.json';
import commonEn from '../../../../translations/en/common.json';

const props = {
  verified: true,
  title: 'Info element test title',
  imageSrc: 'https://image.com',
};

describe('Info', () => {
  it('should render main ui elements', () => {
    renderWithProviders(<Info {...props} />);

    const title = screen.getByText(props.title);
    const verified = screen.getByText(verifiedEn.verified);
    const followBtn = screen.getByText(commonEn.follow);
    const addPlaylistBtn = screen.getByText(commonEn.addPlaylist);
    const podcastImage = screen.getByTestId('podcast-image');

    expect(title).toBeVisible();
    expect(verified).toBeVisible();
    expect(followBtn).toBeVisible();
    expect(addPlaylistBtn).toBeVisible();
    expect(podcastImage).toHaveAttribute('src', props.imageSrc);
  });
});
