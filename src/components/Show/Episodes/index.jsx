import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import CustomTabs from '../../shared/Tabs';
import Episode from './Episode';
import VideoEpisode from './VideoEpisode';
import Button from '../../shared/Button';
import { ListWrapper } from '../../../styles/containers';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const tabs = [
  {
    label: 'First Tab',
    clickHandler: () => {
      console.log('First Tab');
    },
  },
  {
    label: 'Second Tab',
    clickHandler: () => {
      console.log('Second Tab');
    },
  },
  {
    label: 'Live',
    clickHandler: () => {
      console.log('Live');
    },
  },
  {
    label: 'Fourth Tab',
    clickHandler: () => {
      console.log('Fourth Tab');
    },
  },
  {
    label: 'Fifth Tab',
    clickHandler: () => {
      console.log('Fifth Tab');
    },
  },
];

const Episodes = ({ latestEpisodes, premiumEpisodes, video }) => {
  const { t } = useTranslation(['episodes']);

  const handleLoadMoreClick = () => {
    console.log('Load more');
  };

  return (
    <div className="container-padding">
      <CustomTabs tabs={tabs} />

      <ListWrapper>
        <div className="primary-text">{t('latestEpisodes')}</div>
        {latestEpisodes.map(episode => (
          <Episode episode={episode} key={episode.id} />
        ))}
        <ButtonContainer>
          <Button variant="outlined" title="Load More" onClick={handleLoadMoreClick} />
        </ButtonContainer>
      </ListWrapper>

      <ListWrapper>
        <div className="primary-text">{t('premiumEpisodes')}</div>
        {premiumEpisodes.map(episode => (
          <Episode episode={episode} key={episode.id} />
        ))}
        <ButtonContainer>
          <Button variant="outlined" title="Load More" onClick={handleLoadMoreClick} />
        </ButtonContainer>
      </ListWrapper>

      <ListWrapper>
        <div className="primary-text">{t('latestVideo')}</div>
        {video.map(episode => (
          <VideoEpisode episode={episode} key={episode.id} />
        ))}
      </ListWrapper>
    </div>
  );
};

export default Episodes;
