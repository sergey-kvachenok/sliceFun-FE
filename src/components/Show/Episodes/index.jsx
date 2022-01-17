import styled from 'styled-components';
import CustomTabs from '../../shared/Tabs';
import Episode from './Episode';
import VideoEpisode from './VideoEpisode';
import Button from '../../shared/Button';

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
  const handleLoadMoreClick = () => {
    console.log('Load more');
  };

  return (
    <div className="container-padding">
      <CustomTabs tabs={tabs} />

      <div className="primary-text">Latest Episodes</div>
      {latestEpisodes.map(episode => (
        <Episode episode={episode} />
      ))}
      <ButtonContainer>
        <Button variant="outlined" title="Load More" onClick={handleLoadMoreClick} />
      </ButtonContainer>

      <div className="primary-text">Premium Episodes</div>
      {premiumEpisodes.map(episode => (
        <Episode episode={episode} />
      ))}
      <ButtonContainer>
        <Button variant="outlined" title="Load More" onClick={handleLoadMoreClick} />
      </ButtonContainer>

      <div className="primary-text">Latest Viseo</div>
      {video.map(episode => (
        <VideoEpisode episode={episode} />
      ))}
    </div>
  );
};

export default Episodes;
