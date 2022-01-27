import { screen, fireEvent } from '@testing-library/react';
import renderWithProviders from '../../utils/test';
import sidebarEn from '../../translations/en/sideBar.json';
import sidebarRu from '../../translations/ru/sideBar.json';
import { sideBarButtons } from '../../constants/sideBar';
import SideBar from '.';

describe('SideBar', () => {
  it('should render all routes', async () => {
    renderWithProviders(<SideBar />);

    sideBarButtons.forEach(({ name }) => {
      const label = screen.getByText(sidebarEn[name]);
      expect(label).toBeVisible();
    });
  });

  it('should allow to change the language', async () => {
    renderWithProviders(<SideBar />);

    const latestLinkLabel = screen.getByText(sidebarEn.latest);
    const invisibleRuLabel = screen.queryByText(sidebarRu.latest);

    expect(latestLinkLabel).toBeVisible();
    expect(invisibleRuLabel).not.toBeInTheDocument();

    const ruButton = await screen.findByTestId('rus-flag-button');
    fireEvent.click(ruButton);

    const visibleRuLabel = screen.getByText(sidebarRu.latest);

    expect(visibleRuLabel).toBeVisible();
  });
});
