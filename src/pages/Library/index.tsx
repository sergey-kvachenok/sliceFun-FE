import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';
import Spinner from '../../components/shared/Spinner';
import Table from '../../components/shared/Table';
import Tabs from '../../components/shared/Tabs';
import { ListWrapper, ImageWrapper } from '../../styles/containers';
import { useGetLibraryQuery } from '../../store/queries/shows';
import { Row } from '../../constants/types';
import { ILibraryShow } from '../../constants/interfaces';

type RowDataProps = {
  image: string;
  title: string;
  description: string;
  date: string;
};

const createData = (...columns: React.ReactElement[]) => {
  return columns.reduce((acc, column, index) => ({ ...acc, [`column-${index + 1}`]: column }), {});
};

const getRows = (data: RowDataProps[] | ILibraryShow[] = []) => {
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

const getColumns = (t: Function) => [
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

const getTabs = (t: Function) => [
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

const Library = () => {
  const { t } = useTranslation(['library']);
  const [activeTab, setActiveTab] = useState('latestUnplayed');
  const { data, isLoading } = useGetLibraryQuery({ category: activeTab }, { refetchOnReconnect: true });

  const columns = getColumns(t);
  const tabs = getTabs(t);

  if (isLoading) {
    return <Spinner />;
  }

  const handleTabChange = (slug: string) => {
    setActiveTab(slug);
  };

  const rows: Row[] = getRows(data);
  const currentTabs = tabs.map(tab => ({ ...tab, clickHandler: () => handleTabChange(tab.slug) }));

  return (
    <ListWrapper>
      <Tabs customStyles={{ marginBottom: '20px' }} tabs={currentTabs} />
      <Table columns={columns} rows={rows} />
    </ListWrapper>
  );
};

export default Library;
