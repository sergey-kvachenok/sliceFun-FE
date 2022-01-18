import { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';
import { useGetShowsByIdQuery } from '../../store/queries/shows';
import Spinner from '../shared/Spinner';
import Header from './Header';
import Headlines from './Headlines';
import Episodes from './Episodes';

const debounceDelay = 500;

const Show = ({ id = 3 }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const { data, isLoading } = useGetShowsByIdQuery({
    id,
    search: searchQuery,
  });

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

  const { verified, mainImage, title, headlines, latest, premium, video } = data;

  return (
    <div>
      <Header handleSearchChange={handleSearchChange} verified={verified} title={title} mainImage={mainImage} />
      <Headlines headlines={headlines} />
      <Episodes latestEpisodes={latest} premiumEpisodes={premium} video={video} />
    </div>
  );
};

export default Show;
