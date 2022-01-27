import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// English
import commonEn from '../translations/en/common.json';
import showsEn from '../translations/en/shows.json';
import latestShowsEn from '../translations/en/latestShows.json';
import libraryEn from '../translations/en/library.json';
import sideBarEn from '../translations/en/sideBar.json';
import episodesEn from '../translations/en/episodes.json';
import tabsEn from '../translations/en/tabs.json';
import verifiedEn from '../translations/en/verified.json';
// Russian
import commonRu from '../translations/ru/common.json';
import showsRu from '../translations/ru/shows.json';
import latestShowsRu from '../translations/ru/latestShows.json';
import libraryRu from '../translations/ru/library.json';
import sideBarRu from '../translations/ru/sideBar.json';
import episodesRu from '../translations/ru/episodes.json';
import verifiedRu from '../translations/ru/verified.json';
import tabsRu from '../translations/ru/tabs.json';

const resources = {
  en: {
    common: commonEn,
    latestShows: latestShowsEn,
    library: libraryEn,
    shows: showsEn,
    sideBar: sideBarEn,
    episodes: episodesEn,
    verified: verifiedEn,
    tabs: tabsEn,
  },
  ru: {
    common: commonRu,
    latestShows: latestShowsRu,
    library: libraryRu,
    shows: showsRu,
    sideBar: sideBarRu,
    episodes: episodesRu,
    verified: verifiedRu,
    tabs: tabsRu,
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
