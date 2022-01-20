import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import latestShowsEn from './translations/en/latestShows.json';
import latestShowsRu from './translations/ru/latestShows.json';
import libraryEn from './translations/en/library.json';
import libraryRu from './translations/ru/library.json';
import showsEn from './translations/en/shows.json';
import showsRu from './translations/ru/shows.json';
import sideBarEn from './translations/en/sideBar.json';
import sideBarRu from './translations/ru/sideBar.json';
import episodesEn from './translations/en/episodes.json';
import episodesRu from './translations/ru/episodes.json';
import verifiedEn from './translations/en/verified.json';
import verifiedRu from './translations/ru/verified.json';

const resources = {
  en: {
    latestShows: latestShowsEn,
    library: libraryEn,
    shows: showsEn,
    sideBar: sideBarEn,
    episodes: episodesEn,
    verified: verifiedEn,
  },
  ru: {
    latestShows: latestShowsRu,
    library: libraryRu,
    shows: showsRu,
    sideBar: sideBarRu,
    episodes: episodesRu,
    verified: verifiedRu,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
