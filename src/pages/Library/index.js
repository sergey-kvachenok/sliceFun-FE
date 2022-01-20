import { useState } from 'react';
import dayjs from 'dayjs';
import Spinner from '../../components/shared/Spinner';
import Table from '../../components/shared/Table';
import Tabs from '../../components/shared/Tabs';
import { ListWrapper, ImageWrapper } from '../../styles/containers';
import { useGetLibraryQuery } from '../../store/queries/shows';

const createData = (...columns) => {
  return columns.reduce((acc, column, index) => ({ ...acc, [`column-${index + 1}`]: column }), {});
};

const columns = [
  {
    label: '',
  },
  {
    label: 'Title',
  },
  {
    label: 'Publish Date',
  },
];

const tabs = [
  {
    slug: 'latestUnplayed',
    label: 'Latest Unplayed',
  },
  {
    slug: 'all',
    label: 'All',
  },
  {
    slug: 'purchased',
    label: 'Purchased',
  },
  {
    slug: 'downloaded',
    label: 'Downloaded',
  },
];

const getRows = (data = []) => {
  return data.map(item => {
    const { image, title, description, date } = item;

    const firstColumn = (
      <ImageWrapper width={70} height={70}>
        <img width="70" height="70" src={image} alt="Library Episode" />
      </ImageWrapper>
    );

    const secondColumn = (
      <div>
        <div className="secondary-text-bold">{title}</div>
        <div className="secondary-text">{description}</div>
      </div>
    );

    const thirdColumn = <div>{dayjs(new Date(date)).format('MMM D, YYYY')}</div>;

    return createData(firstColumn, secondColumn, thirdColumn);
  });
};

const Library = () => {
  const [activeTab, setActiveTab] = useState('latestUnplayed');
  const { data, isLoading } = useGetLibraryQuery({ category: activeTab }, { refetchOnReconnect: true });

  if (isLoading) {
    return <Spinner />;
  }

  const handleTabChange = slug => {
    setActiveTab(slug);
  };

  const rows = getRows(data);
  const currentTabs = tabs.map(tab => ({ ...tab, clickHandler: () => handleTabChange(tab.slug) }));

  return (
    <ListWrapper>
      <Tabs customStyles={{ marginBottom: '20px' }} tabs={currentTabs} />
      <Table columns={columns} rows={rows} />
    </ListWrapper>
  );
};

export default Library;
