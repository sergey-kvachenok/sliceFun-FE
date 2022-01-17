import { useGetShowsByIdQuery } from '../../store/queries/shows';
import Spinner from '../shared/Spinner';
import Header from './Header';
import Headlines from './Headlines';
import Episodes from './Episodes';

const Show = ({ id = 3 }) => {
  const { data, isLoading } = useGetShowsByIdQuery(id);

  if (isLoading) {
    return <Spinner />;
  }

  const { verified, mainImage, title, headlines, latest, premium, video } = data;

  return (
    <div>
      <Header verified={verified} title={title} mainImage={mainImage} />
      <Headlines headlines={headlines} />
      <Episodes latestEpisodes={latest} premiumEpisodes={premium} video={video} />
    </div>
  );
};

export default Show;
