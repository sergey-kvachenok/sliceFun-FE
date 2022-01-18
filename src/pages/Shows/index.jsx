import { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';
import Grid from '@mui/material/Grid';
import Show from '../../components/shared/Show';
import Spinner from '../../components/shared/Spinner';
import Search from '../../components/shared/Search';
import { ListWrapper } from '../../styles/containers';
import { useGetShowsQuery } from '../../store/queries/shows';

const debounceDelay = 500;

const Shows = () => {
  const [searchQuery, setSearchQuery] = useState('');
  console.log('searchQuery', searchQuery);
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

  const handleSearchChange = inputValue => {
    getDebouncedSearchResult(inputValue);
  };

  const isEmpty = !data.length;
  const searchResultContent = isEmpty ? (
    <div className="primary-text">No results</div>
  ) : (
    <Grid container spacing={4} sx={{ padding: 0 }}>
      {data.map(show => (
        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ justifyContent: 'center', display: 'flex' }}>
          <Show show={show} />
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
