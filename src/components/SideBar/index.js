import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';

const sideBarButtons = [
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
const SideBar = () => {
  const { pathname } = useLocation();

  return (
    <List sx={{ borderRight: 1, borderColor: 'grey.200' }}>
      <ListItem>
        <ListItemIcon>
          <PodcastsIcon sx={{ fontSize: 40 }} />
        </ListItemIcon>
        <ListItemText>
          <Typography variant='h4'>
            Slice
          </Typography>
        </ListItemText>
      </ListItem>
      {sideBarButtons.map((button) => (
        <Link to={button.link} key={button.text}>
          <ListItem disabled={button.link === pathname} button>
            <ListItemIcon>
              {button.icon}
            </ListItemIcon>
            <ListItemText primary={button.text} />
          </ListItem>
        </Link>
      ))}
      <Link to='/account'>
        <ListItem button sx={{ mt: 25 }}>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary='Your Account' />
        </ListItem>
      </Link>
    </List>
  );
};

export default SideBar;
