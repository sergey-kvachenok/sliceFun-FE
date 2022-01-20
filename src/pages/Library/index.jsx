import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import dayjs from 'dayjs';
import Spinner from '../../components/shared/Spinner';
import Table from '../../components/shared/Table';
import Tabs from '../../components/shared/Tabs';
import { ListWrapper } from '../../styles/containers';
import { useGetLibraryQuery } from '../../store/queries/shows';

const ImageWrapper = styled.div`
  height: 70px;
  width: 70px;
  margin-right: 15px;

  img {
    height: inherit;
  }
`;

const createData = (...columns) => {
  return columns.reduce((acc, column, index) => ({ ...acc, [`column-${index + 1}`]: column }), {});
};

const getRows = (data = []) => {
  return data.map(item => {
    const { image, title, description, date } = item;

    const firstColumn = (
      <ImageWrapper>
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
  const { t } = useTranslation(['library']);
  const [activeTab, setActiveTab] = useState('latestUnplayed');
  const { data, isLoading } = useGetLibraryQuery({ category: activeTab });

  const columns = [
    {
      label: t('columns.firstColumn'),
    },
    {
      label: t('columns.secondColumn'),
    },
    {
      label: t('columns.thirdColumn'),
    },
  ];

  const tabs = [
    {
      slug: 'latestUnplayed',
      label: t('tabs.firstTab'),
    },
    {
      slug: 'all',
      label: t('tabs.secondTab'),
    },
    {
      slug: 'purchased',
      label: t('tabs.thirdTab'),
    },
    {
      slug: 'downloaded',
      label: t('tabs.fourthTab'),
    },
  ];

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
