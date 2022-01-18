import Library from '../pages/Library';
import LatestShows from '../pages/LatestShows';
import Shows from '../pages/Shows';
import Show from '../pages/Show';

export const routes = [
    {
    path: '/',
    component: LatestShows,
  },
   {
    path: '/shows',
    component: Shows,
  },
   {
    path: '/library',
    component: Library,
  },
   {
    path: '/shows/:id',
    component: Show,
  },
]