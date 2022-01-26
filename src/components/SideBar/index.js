import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import RuFlag from '../../assets/icons/RuFlag';
import UsFlag from '../../assets/icons/UsFlag';
import { sideBarButtons } from '../../constants/sideBar';
import { StyledLink } from '../../styles/containers';

const styles = {
  sideBarText: {
    '& .MuiTypography-root': {
      fontFamily: 'Montserrat-Bold',
    },
  },
};

const SideBar = () => {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation(['sideBar']);

  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };

  return (
    <List sx={{ borderRight: 1, borderColor: 'grey.200' }}>
      <StyledLink to="/">
        <ListItem>
          <ListItemIcon>
            <PodcastsIcon sx={{ fontSize: 40 }} />
          </ListItemIcon>

          <ListItemText sx={styles.sideBarText}>
            <Typography variant="h4">Slice</Typography>
          </ListItemText>
        </ListItem>
      </StyledLink>

      {sideBarButtons.map(button => (
        <StyledLink to={button.link} key={button.name}>
          <ListItem disabled={button.link === pathname} button>
            <ListItemIcon>{button.icon}</ListItemIcon>
            <ListItemText sx={styles.sideBarText} primary={t(button.name)} />
          </ListItem>
        </StyledLink>
      ))}

      <StyledLink to="/account">
        <ListItem sx={{ mt: 5 }} button>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText sx={styles.sideBarText} primary={t('yourAccount')} />
        </ListItem>
      </StyledLink>
      <Divider />

      <ListItem sx={{ mt: 1 }}>
        <IconButton
          data-testid="rus-flag-button"
          sx={{ backgroundColor: 'grey.200', mr: 3 }}
          onClick={() => changeLanguage('ru')}
        >
          <RuFlag />
        </IconButton>
        <IconButton
          data-testid="en-flag-button"
          sx={{ backgroundColor: 'grey.200' }}
          onClick={() => changeLanguage('en')}
        >
          <UsFlag />
        </IconButton>
      </ListItem>
    </List>
  );
};

export default SideBar;
