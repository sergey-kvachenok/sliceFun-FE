import { useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { useGetShowsByIdQuery } from '../../store/queries/shows';
import Spinner from '../../components/shared/Spinner';
import Header from '../../components/Show/Header';
import Headlines from '../../components/Show/Headlines';
import Episodes from '../../components/Show/Episodes';

const debounceDelay = 500;

const Show = () => {
  const { id } = useParams();
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
