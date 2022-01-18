import React from 'react';
import { useLocation } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import { sideBarButtons } from '../../constants/sideBar';
import { StyledLink } from '../../styles/containers';

const SideBar = () => {
  const { pathname } = useLocation();

  return (
    <List sx={{ borderRight: 1, borderColor: 'grey.200' }}>
      
      <StyledLink to='/'>
      <ListItem>
        <ListItemIcon>
          <PodcastsIcon sx={{ fontSize: 40 }} />
        </ListItemIcon>

        <ListItemText>
          <Typography variant="h4">Slice</Typography>
        </ListItemText>
      </ListItem>
      </StyledLink>

      {sideBarButtons.map(button => (
        <StyledLink to={button.link} key={button.text}>
          <ListItem disabled={button.link === pathname} button>
            <ListItemIcon>{button.icon}</ListItemIcon>
            <ListItemText primary={button.text} />
          </ListItem>
        </StyledLink>
      ))}

      <StyledLink to="/account">
        <ListItem button sx={{ mt: 25 }}>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Your Account" />
        </ListItem>
      </StyledLink>
    </List>
  );
};

export default SideBar;
