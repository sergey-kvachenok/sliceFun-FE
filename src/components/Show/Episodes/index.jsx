import CustomTabs from '../../shared/Tabs';
import Episode from './Episode';

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

const Episodes = ({ latestEpisodes }) => {
  return (
    <div className="container-padding">
      <CustomTabs data={tabs} />

      <div className="primary-text">Latest Episodes</div>
      {latestEpisodes.map(episode => (
        <Episode episode={episode} />
      ))}
    </div>
  );
};

export default Episodes;
