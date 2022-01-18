import FiberNewIcon from '@mui/icons-material/FiberNew';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

export const sideBarButtons = [
  {
    text: 'Latest',
    icon: <FiberNewIcon />,
    link: '/',
  },
  {
    text: 'Shows',
    icon: <LibraryMusicIcon />,
    link: '/shows',
  },
  {
    text: 'Library',
    icon: <VideoLibraryIcon />,
    link: '/library',
  },
];
