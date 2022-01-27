import React from 'react';
import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import debounce from 'lodash.debounce';
import Grid from '@mui/material/Grid';
import Show from '../../components/shared/Show';
import Spinner from '../../components/shared/Spinner';
import Search from '../../components/shared/Search';
import { ListWrapper } from '../../styles/containers';
import { useGetShowsQuery } from '../../store/queries/shows';

const debounceDelay = 500;

const Shows = () => {
  const { t } = useTranslation(['shows']);
  const [searchQuery, setSearchQuery] = useState('');
  const { data, isLoading } = useGetShowsQuery({ search: searchQuery });

  const getDebouncedSearchResult = useCallback(
    debounce(value => {
      setSearchQuery(value);
    }, debounceDelay),
    [],
  );

  if (isLoading) {
    return <Spinner />;
  }

  const handleSearchChange = (inputValue: string) => {
    getDebouncedSearchResult(inputValue);
  };

  const isEmpty = !data?.length;
  const searchResultContent = isEmpty ? (
    <div className="primary-text">{t('noResults')}</div>
  ) : (
    <Grid container spacing={4} sx={{ padding: 0 }}>
      {data.map(show => (
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ justifyContent: 'center', display: 'flex' }} key={show.title}>
          <Show dataTestId="searched-shows-item" show={show} />
        </Grid>
      ))}
    </Grid>
  );

  return (
    <>
      <ListWrapper>
        <Search handleSearchChange={handleSearchChange} />
      </ListWrapper>
      <ListWrapper>{searchResultContent}</ListWrapper>
    </>
  );
};

export default Shows;
